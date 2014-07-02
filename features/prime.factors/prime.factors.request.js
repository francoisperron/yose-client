var $ = $ || require('jquery');

function PrimeFactorsRequest() {
}

PrimeFactorsRequest.prototype.decompose = function (numbers) {
    var queryString = '?number=' + numbers.split(',').join('&number=');
    $.get('/primeFactors' + queryString, displayResult);
};

function displayResult(data) {
    $('#result-title').html('Result');

    if (data.error == 'not a number') {
        $('#result').html(data.number + ' is ' + data.error);
    }
    else if(data.error){
        $('#result').html(data.error);
    }
    else {
        $('#result').html(data.number + ' = ' + data.decomposition.join(' x '));
    }
}

var module = module || {};
module.exports = PrimeFactorsRequest;