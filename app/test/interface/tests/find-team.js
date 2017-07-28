var test = require('../selenium.js');
var assert = require('assert');
var driver = test.driver.build();
var by= test.by;

const host = 'http://localhost:3000/#!/';

driver.get(host.concat('find-team'));
driver.findElement(by.linkText('Criar novo time')).click().then(function() {
    driver.getCurrentUrl().then(function(value) {
        assert.equal(value, host.concat('create-team'), 
        'Click on the Create Time button on the Find Time screen Did not take the screen create time');
    });
    driver.close();
});