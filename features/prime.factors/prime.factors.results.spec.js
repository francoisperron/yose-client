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
            browser.fill("#number", "1allo");
            browser.click("#go").then(function () {
                expect(browser.text('#result')).toEqual('1allo is not a number');
                done();
            });
        });
    });

    it('supports multiple numbers', function (done) {
        browser.visit(primeFactorsPage).then(function () {
            browser.fill("#number", "15,18");
            browser.click("#go").then(function () {
                expect(browser.text('#results li:nth-child(1)')).toEqual('15 = 3 x 5');
                expect(browser.text('#results li:nth-child(2)')).toEqual('18 = 2 x 3 x 3');
                done();
            });
        });
    });

});