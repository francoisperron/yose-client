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
            browser.clickLink('#repository-link', function(){
                expect(browser.text('#readme')).toContain('YoseTheGame');
                done();
            });

        });
    });
});