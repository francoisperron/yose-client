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

    if(data.error){
        $('#result').html(data.error);
    }
    else{
        $('#result').html(data.number + ' = ' + data.decomposition.join(' x '));
    }

}