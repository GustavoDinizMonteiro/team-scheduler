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
        userId: "5a1e1c5e094349001abea366",
        team: "5a1e0f698ab7d61034e7be2a",
        action: "accept"
    },
    "/signup": {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        team: "5a1e0f698ab7d61034e7be2a"
    }
}

