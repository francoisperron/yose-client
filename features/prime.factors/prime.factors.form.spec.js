/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('The prime factors page', function () {

    var browser = new Browser();
    var primeFactorsPage = 'http://localhost:5001/features/prime.factors/prime.factors.form.html';

    it('displays a title', function (done) {
        browser.visit(primeFactorsPage).then(function () {
            expect(browser.text('#title')).toEqual('Prime Factors');
            done();
        });
    });

    it('displays an invitation to enter a number', function (done) {
        browser.visit(primeFactorsPage).then(function () {
            expect(browser.text('#invitation')).toEqual('Enter a number to decompose');
            done();
        });
    });

    it('displays a input where the user can enter a number', function (done) {
        browser.visit(primeFactorsPage).then(function () {
            expect(browser.query('input#number').name).toEqual('number');
            done();
        });
    });

    it('displays a button to trigger decomposition', function (done) {
        browser.visit(primeFactorsPage).then(function () {
            expect(browser.text('button#go')).toEqual('GO');
            done();
        });
    });
});