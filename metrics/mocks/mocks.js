const faker = require('faker');

module.exports = {
    "/team-post": {
        name: faker.company.companyName(),
        admin: {
            email: faker.internet.email(),
            password: faker.internet.password()
        }
    }
}
