var $ = $ || require('jquery');

function PrimeFactorsRequest() {
}

PrimeFactorsRequest.prototype.decompose = function (numbers) {
    var queryString = '?number=' + numbers.split(',').join('&number=');
    $.get('/primeFactors' + queryString).success(render);
};

function render(data) {
    $('#result-title').html('Result');
    $('#result').empty();
    $('#results').empty();

    if (data instanceof Array) {
        renderMultipleResults(data);
    }
    else {
        renderOneResult(data);
    }
}

function renderMultipleResults(datas) {
    for (var i = 0; i < datas.length; i++) {
        $('#results').append('<li>' + format(datas[i]) + '</li>')
    }
}

function renderOneResult(data) {
    $('#result').html(format(data));
}

function format(data) {
    var resultString;

    if (data.error == 'not a number') {
        resultString = data.number + ' is ' + data.error;
    }
    else if (data.error) {
        resultString = data.error;
    }
    else {
        resultString = data.number + ' = ' + data.decomposition.join(' x ');
    }
    return resultString;
}

var module = module || {};
module.exports = PrimeFactorsRequest;