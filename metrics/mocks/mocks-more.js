const faker = require('faker');

const helper = name => Array(20).join(name); 

module.exports = {
    "/team-post": {
        name: helper(faker.company.companyName()),
        admin: {
            email: helper(faker.internet.email()),
            password: helper(faker.internet.password())
        }
    }
}