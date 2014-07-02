/*global describe, beforeEach, afterEach, it, expect, spyOn, jasmine */
var $ = require('jquery');
var PrimeFactorsRequest = require('./prime.factors.request');

describe('Prime factors request', function () {

    var request = new PrimeFactorsRequest();

    beforeEach(function () {
        $('body').append('<div id="result-title"/><div id="result"/><ol id="results"/>');
    });

    it('calls primeFactors endpoint with the number to decompose', function () {
        spyOn($, 'get').andCallThrough();
        request.decompose('25');

        expect($.get).toHaveBeenCalledWith('/primeFactors?number=25');
    });

    it('calls primeFactors endpoint with multiple numbers to decompose', function () {
        spyOn($, 'get').andCallThrough();
        request.decompose('25,43,1');

        expect($.get).toHaveBeenCalledWith('/primeFactors?number=25&number=43&number=1');
    });

    it('displays single result in #result', function () {
        spyOn($, 'get').andCallFake(function () {
            return {
                success: function (callback) {
                    callback({number: 25, decomposition: [5, 5]});
                }
            };
        });

        request.decompose('25');

        expect($('#result').html()).toEqual('25 = 5 x 5')
    });

    it('displays multiple results in #results', function () {
        spyOn($, 'get').andCallFake(function () {
            return {
                success: function (callback) {
                    callback([
                        {number: 14, decomposition: [2, 7]},
                        {number: 'non', error: 'not a number'},
                        {number: 1234567, error: 'erreur de gros'}
                    ]);
                }
            };
        });

        request.decompose('14,non,1234567');

        expect($('ol#results li:nth-child(1)').html()).toEqual('14 = 2 x 7');
        expect($('ol#results li:nth-child(2)').html()).toEqual('non is not a number');
        expect($('ol#results li:nth-child(3)').html()).toEqual('erreur de gros');
    });
});