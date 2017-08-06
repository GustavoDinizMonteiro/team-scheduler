/*jshint strict:false */
var jwt = require("jsonwebtoken");
var moment = require("moment");
var User = require("../models/User");
var mongoose = require("mongoose");

var generateToken = function(user) {
  var payload = {
    iss: "my.domain.com",
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(7, "days").unix()
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET);
};

exports.generateToken = generateToken;

/**
 * Login required middleware
 */
exports.ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated() && req.user) {
    next();
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
};

/**
 * POST /login
 * Sign in with email and password
 */
exports.loginPost = function(req, res) {
  req.assert("email", "Email is not valid").isEmail();
  req.assert("email", "Email cannot be blank").notEmpty();
  req.assert("password", "Password cannot be blank").notEmpty();
  req.assert("teamId", "Team Id cannot be blank").notEmpty();
  req.sanitize("email").normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }

  if (!mongoose.Types.ObjectId.isValid(req.body.teamId)) {
    return res.status(400).send({ msg: "Team id is not valid." });
  }

  function isPendingMember(team, memberId){
      var isPendingMember = false;

      team.pending_members.forEach(function(pendingMemberId){
          if(''+memberId === ''+pendingMemberId){
              isPendingMember = true;
          }
      });

      return isPendingMember;
  }

  User.findOne(
      {
          email: req.body.email,
          team: mongoose.Types.ObjectId(req.body.teamId)
      })
      .populate('team')
      .exec(function(err, user) {
          if (!user) {
            return res.status(401).send({
              msg:
                "The email address " +
                req.body.email +
                " is not associated with any team member. " +
                "Double-check your email address and try again."
            });
          }

          if(isPendingMember(user.team, user._id)){
              return res.status(401).send({
                  msg: "The user " + user.name + " is still a pending member " +
                      "wait for the team admin approval to become a member."
              });
          }

          user.comparePassword(req.body.password, function(err, isMatch) {
            if (!isMatch) {
              return res.status(401).send({ msg: "Invalid email or password" });
            }

            res.send({ token: generateToken(user), user: user.toJSON() });
          });
    }
  );
};
