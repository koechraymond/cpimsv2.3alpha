// QuestionSkipLogic
    // Q5 -> Q10
    triggerSkip('WB_STA_5_1','Unemployed','WB_STA_10_1','2');

    // Q5 -> Q10
    triggerSkip('WB_STA_5_1','Unemployed','WB_STA_10_1','2');

// endQuestionSkipLogic





// ------------------------CORE-------------------------
function triggerSkip(inputToCheck,rightValue,toQnID,toTabID) {
    $('input[name="'+inputToCheck+'"][value="'+rightValue+'"]').on('change', function () {
        
        // textbox, numbers, dates etc
        if($('input[name="'+inputToCheck+'"]').attr('type') == 'date' || $('input[name="'+inputToCheck+'"]').attr('type') == 'text' || $('input[name="'+inputToCheck+'"]').attr('type') == 'number'){
            var valFromInput = $('input[name="'+inputToCheck+'"]').val();
            if(valFromInput == rightValue){
                skipToQn(inputToCheck,toQnID,toTabID);
            }
        }
        // END textbox, numbers, dates etc

        // cater for checkbox
        if($('input[name="'+inputToCheck+'"]').attr('type') == 'checkbox'){
            console.log("checkbox with Name: "+inputToCheck+" found");
            var valFromInput = '';
            $.each($(this), function (chind, eachbx) {
                if($(this).is(':checked')){
                    console.log("TICKED checkbox with Name: "+inputToCheck+" found");
                    skipToQn(inputToCheck,toQnID,toTabID);
                    // var eachbxval = eachbx.val();
                    // valFromInput += eachbxval+', ';
                }
            });
        }
        // END cater for checkbox

        // cater for radio
        if($('input[name="'+inputToCheck+'"]').attr('type') == 'radio'){
            console.log("radio with Name: "+inputToCheck+" found");
            var valFromInput = $('input[name="'+inputToCheck+'"]:checked').val();
            if(valFromInput == rightValue){
                console.log("TICKED radio with Name: "+inputToCheck+" found");
                skipToQn(inputToCheck,toQnID,toTabID);
            }
        }
        //END cater for radio
    });
}
function skipToQn(inputToCheck,toQnID,toTabID) {
    $('a[href="#step'+toTabID+'"]').trigger("click");
    $("td").attr("tabindex", "-1");
    $('input[name="'+toQnID+'"]').closest("td").attr("tabindex", "1");
    $('input[name="'+toQnID+'"]').closest("td").focus();
    //hideQnsBtwn
        var destinationT = $('input[name="'+toQnID+'"]').closest("tr");
        $('input[name="'+inputToCheck+'"]').closest("tr").nextUntil(destinationT, "tr").addClass('hidden');
    //hideQnsBtwn
    $('input[name="'+toQnID+'"]').closest("td").css('outline', 'thick double #32a1ce');
    console.log("skipping to Qn: "+toQnID+" on Tab: "+toTabID);
}
// ------------------------endCORE-------------------------