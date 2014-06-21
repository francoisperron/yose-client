/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('First web page', function () {

    var browser = new Browser();

    it('displays Hello Yose', function (done) {
        browser.visit('http://localhost:5001').then(function () {
            expect(browser.text('#welcome')).toEqual('Hello Yose');
            done();
        });
    });

    it('displays a link to the github repo', function (done) {
        browser.visit('http://localhost:5001').then(function () {
            expect(browser.query('#repository-link').href).toEqual('https://github.com/francoisperron/yose-client');
            done();
        });
    });
});