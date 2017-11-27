const fs = require('fs');

module.exports = {
    log: (start, end) => {
        let seconds = (end - start) / 1000;
        let message = 'This operation took ' +  seconds + " .";
        
        console.log(message);
        fs.appendFileSync('./results.txt', message);
    },

    createOptions: (uri, body) => {
        return {
            uri: uri,
            body: body,
            json: true
        };
    }
};