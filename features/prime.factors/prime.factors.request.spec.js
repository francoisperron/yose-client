/*global describe, beforeEach, afterEach, it, expect, spyOn, jasmine */
var $ = require('jquery');
var PrimeFactorsRequest = require('./prime.factors.request');

describe('Prime factors request', function () {

    var request = new PrimeFactorsRequest();

    it('calls primeFactors endpoint', function () {
        spyOn($, 'get');
        request.decompose(25);

        expect($.get).toHaveBeenCalledWith('/primeFactors', {number: 25}, jasmine.any(Function));
    });
});