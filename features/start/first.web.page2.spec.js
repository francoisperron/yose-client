/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('First web page', function () {

    var browser = new Browser();
    var firstWebPage = 'http://localhost:5001/features/start/first.web.page.html';

    it('displays Hello Yose', function (done) {
        browser.visit(firstWebPage).then(function () {
            expect(browser.text('#welcome')).toEqual('Hello Yose');
            done();
        });
    });

    it('displays a link to the github repo', function (done) {
        browser.visit(firstWebPage).then(function () {
            expect(browser.query('a#repository-link').href).toEqual('https://github.com/francoisperron/yose-client');
            done();
        });
    });

    it('displays a link with contact info', function (done) {
        browser.visit(firstWebPage).then(function () {
            expect(browser.query('a#contact-me-link').href).toEqual('http://les-epicuriens-du-logiciel.ca/');
            done();
        });
    });

    it('displays a link to the first web service', function (done) {
        browser.visit(firstWebPage).then(function () {
            expect(browser.query('a#ping-challenge-link').href).toEqual('http://localhost:5001/ping');
            done();
        });
    });
});