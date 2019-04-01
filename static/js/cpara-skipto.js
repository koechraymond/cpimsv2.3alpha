// QuestionSkipLogic
//format is:   triggerSkip(inputToCheck,rightValue,questionToGoTo,tabContainingDestinationQn);
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
                var unDo = false
                skipToQn(inputToCheck,toQnID,toTabID,unDo);
            }else{
                var unDo = true;
                skipToQn(inputToCheck,toQnID,toTabID,unDo);
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
                    var unDo = false;
                    skipToQn(inputToCheck,toQnID,toTabID,unDo);
                }else{
                    console.log("UNDO ticked checkbox with Name: "+inputToCheck);
                    var unDo = true;
                    skipToQn(inputToCheck,toQnID,toTabID,unDo);
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
                var unDo = false;
                skipToQn(inputToCheck,toQnID,toTabID,unDo);
            }else{
                var unDo = true;
                skipToQn(inputToCheck,toQnID,toTabID,unDo);
            }
        }
        //END cater for radio
    });
}
function skipToQn(inputToCheck,toQnID,toTabID,unDo) {
    $('a[href="#step'+toTabID+'"]').trigger("click");
    //hideQnsBtwn
    var destinationT = $('input[name="'+toQnID+'"]').closest("tr");
    if(!unDo){
            $("td").attr("tabindex", "-1");
            $('input[name="'+toQnID+'"]').closest("td").attr("tabindex", "1");
            $('input[name="'+toQnID+'"]').closest("td").focus();
            $('input[name="'+inputToCheck+'"]').closest("tr").nextUntil(destinationT, "tr").addClass('hidden');
            $('input[name="'+toQnID+'"]').closest("td").css('outline', 'thick double #32a1ce');
            console.log("skipping to Qn: "+toQnID+" on Tab: "+toTabID);
        }else{
            $("td").attr("tabindex", "-1");
            $('input[name="'+inputToCheck+'"]').closest("td").attr("tabindex", "1");
            $('input[name="'+inputToCheck+'"]').closest("td").focus();
            $('input[name="'+inputToCheck+'"]').closest("tr").nextUntil(destinationT, "tr").removeClass('hidden');
            $('input[name="'+inputToCheck+'"]').closest("td").css('outline', 'thick double #32a1ce');
            console.log("UNDO skipping to Qn: "+toQnID+" on Tab: "+toTabID);
        }
    //hideQnsBtwn
}
// ------------------------endCORE-------------------------
