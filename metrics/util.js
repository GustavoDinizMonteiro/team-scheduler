const fs = require('fs');

module.exports = {
    log: (start, end, archive) => {
        let seconds = (end - start) / 1000;
        let message = seconds + " \n";
        
        fs.appendFileSync('./' + archive + '.txt', message);
    },

    createOptions: (uri, body) => {
        return {
            uri: uri,
            body: body,
            json: true
        };
    }
};