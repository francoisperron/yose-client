/*global describe, beforeEach, afterEach, it, expect */
var Browser = require('zombie');

xdescribe('The prime factors result', function () {

    var browser = new Browser();

    it('is displayed in the #result element', function (done) {
        browser.visit('http://localhost:5001/prime.factors.form.html').then(function () {
            browser.fill("#number", "5367");
            browser.pressButton("#go").then(function(){
                expect(browser.text('#result')).toEqual('5367 = 3 x 1789');
                done();
            });
        });
    });
});