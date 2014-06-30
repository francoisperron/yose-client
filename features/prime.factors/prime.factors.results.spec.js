/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('The prime factors result', function () {

    var browser = new Browser();
    var primeFactorsPage = 'http://localhost/primeFactors/ui';

    it('is displayed in the #result element', function (done) {
        browser.visit(primeFactorsPage).then(function () {
            browser.fill("#number", "5367");
            browser.click("#go").then(function () {
                expect(browser.text('#result')).toEqual('5367 = 3 x 1789');
                done();
            });
        });
    });

    it('supports too big number error', function (done) {
        browser.visit(primeFactorsPage).then(function () {
            browser.fill("#number", "1000001");
            browser.click("#go").then(function () {
                expect(browser.text('#result')).toEqual('too big number (>1e6)');
                done();
            });
        });
    });

    it('supports not a number error', function (done) {
        browser.visit(primeFactorsPage).then(function () {
            browser.fill("#number", "allo");
            browser.click("#go").then(function () {
                expect(browser.text('#result')).toEqual('allo is not a number');
                done();
            });
        });
    });

});