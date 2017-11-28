const faker = require('faker');

module.exports = {
    "/team-post": {
        name: faker.company.companyName(),
        admin: {
            email: faker.internet.email(),
            password: faker.internet.password()
        }
    },
    "/login": {
        email: faker.internet.email(),
        password: faker.internet.password()
    },
    "/pending-members": {
        "userId": "5a1dbead2fc49c0018f9f0b6"
    }
}

