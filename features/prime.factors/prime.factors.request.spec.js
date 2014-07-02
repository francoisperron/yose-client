/*global describe, beforeEach, afterEach, it, expect, spyOn, jasmine */
var $ = require('jquery');
var PrimeFactorsRequest = require('./prime.factors.request');

describe('Prime factors request', function () {

    var request = new PrimeFactorsRequest();

    it('calls primeFactors endpoint with the number to decompose', function () {
        spyOn($, 'get');
        request.decompose('25');

        expect($.get).toHaveBeenCalledWith('/primeFactors?number=25', jasmine.any(Function));
    });

    it('calls primeFactors endpoint with multiple numbers to decompose', function () {
        spyOn($, 'get');
        request.decompose('25,43,1');

        expect($.get).toHaveBeenCalledWith('/primeFactors?number=25&number=43&number=1', jasmine.any(Function));
    });
});