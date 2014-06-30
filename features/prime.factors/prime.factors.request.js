function PrimeFactorsRequest() {
}

PrimeFactorsRequest.prototype.decompose = function (number) {
    if(isNaN(parseInt(number))){
        displayResult({error: number + ' is not a number'});
        return;
    }

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