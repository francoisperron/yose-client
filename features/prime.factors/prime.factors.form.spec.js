/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

describe('The prime factors page', function () {

    var browser = new Browser();

    it('displays a title', function (done) {
        browser.visit('http://localhost:5001/prime.factors.form.html').then(function () {
            expect(browser.text('#title')).toEqual('Prime Factors');
            done();
        });
    });

    it('displays an invitation to enter a number', function (done) {
        browser.visit('http://localhost:5001/prime.factors.form.html').then(function () {
            expect(browser.text('#invitation')).toEqual('Enter a number to decompose');
            done();
        });
    });

    it('displays a input where the user can enter a number', function (done) {
        browser.visit('http://localhost:5001/prime.factors.form.html').then(function () {
            expect(browser.query('input#number').name).toEqual('number');
            done();
        });
    });

    it('displays a button to trigger decomposition', function (done) {
        browser.visit('http://localhost:5001/prime.factors.form.html').then(function () {
            expect(browser.text('button#go')).toEqual('GO');
            done();
        });
    });
});