validBench(['if_ovc', 'cp1q', 'cp3q', 'cp4q'], ['AYES','AYES','AYES','AYES'], 'cp1b');
validBench(['cp5q', 'cp6q', 'cp7q'], ['AYES','AYES','AYES'], 'cp2b');
validBench(['u10_know_status', 'cp8q', 'cp9q', 'cp10q', 'cp11q', 'cp12q', 'o10_know_status'], ['AYES','AYES','AYES'], 'cp2b');


// ----------------CORE----------------
function validBench(arrayOfInputsToCheck, arrayOfExpectedValues, idOfBenchmarkQn) {
    $('input, select').change(function() {
        $('input[name='+idOfBenchmarkQn+']').val(null);
        $('input[name='+idOfBenchmarkQn+']').attr('disabled', true);
        var valToMatch = arrayOfInputsToCheck.length;
        var actualVal = 0;
        var i = 0;
        while (i<valToMatch) {
            $.each(arrayOfInputsToCheck, function (inde, inputName) { 
                var valu = $('input[name='+inputName+']:checked').val();
                if(valu === arrayOfExpectedValues[inde]){
                    actualVal = actualVal + 1;
                }
            });
            i++
        }
        if(actualVal == valToMatch){
            $('input[name='+idOfBenchmarkQn+']').removeAttr('disabled');
            $('input[name='+idOfBenchmarkQn+'][value=AYES]').prop("checked", true);
        }
    });
}
// end----------------CORE----------------