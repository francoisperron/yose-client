var $ = $ || require('jquery');

function PrimeFactorsRequest() {
}

PrimeFactorsRequest.prototype.decompose = function (numbers) {
    var queryString = '?number=' + numbers.split(',').join('&number=');
    $.get('/primeFactors' + queryString).success(displayResult);
};

function displayResult(data) {
    $('#result').empty();
    $('#results').empty();

    if (data instanceof Array) {
        displayMultipleResults(data);
    }
    else {
        displayOneResult(data);
    }
}

function displayMultipleResults(datas) {
    $('#result-title').html('Result');

    for (var i = 0; i < datas.length; i++) {
        var resultItem;
        var data = datas[i];
        if (data.error == 'not a number') {
            resultItem = data.number + ' is ' + data.error;
        }
        else if (data.error) {
            resultItem = data.error;
        }
        else {
            resultItem = data.number + ' = ' + data.decomposition.join(' x ');
        }
        $('#results').append('<li>' + resultItem + '</li>')
    }
}
function displayOneResult(data) {
    $('#result-title').html('Result');

    if (data.error == 'not a number') {
        $('#result').html(data.number + ' is ' + data.error);
    }
    else if (data.error) {
        $('#result').html(data.error);
    }
    else {
        $('#result').html(data.number + ' = ' + data.decomposition.join(' x '));
    }
}

var module = module || {};
module.exports = PrimeFactorsRequest;