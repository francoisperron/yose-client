function PrimeFactorsRequest() {
}

PrimeFactorsRequest.prototype.decompose = function (number) {
    $.ajax({
        url: '/primeFactors',
        data: { number: number },
        success: displayResult
    });
};

function displayResult(data) {
    $('#result-title').html('Result');
    $('#result').html(data.number + ' = ' + data.decomposition.join(' x '));
}