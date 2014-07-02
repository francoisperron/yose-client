var $ = $ || require('jquery');

function PrimeFactorsRequest() {
}

PrimeFactorsRequest.prototype.decompose = function (number) {
    if(isNaN(number)){
        displayResult({error: number + ' is not a number'});
        return;
    }

    $.get('/primeFactors', { number: number }, displayResult);
};

function displayResult(data) {
    $('#result-title').html('Result');

    if(data.error){
        $('#result').html(data.error);
    }
    else{
        $('#result').html(data.number + ' = ' + data.decomposition.join(' x '));
    }
}

var module = module || {};
module.exports = PrimeFactorsRequest;