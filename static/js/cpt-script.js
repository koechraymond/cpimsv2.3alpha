jQuery(document).ready(function()
{
	 //multi selects
    $('select[name=CPT_GOAL]').multiselect({
        selectAllValue: 'multiselect-all',
        includeSelectAllOption: true,
        enableCaseInsensitiveFiltering: true,
        numberDisplayed: 1,
        maxHeight: 300,
        buttonWidth: '100%',
        buttonClass: 'btn btn-white'
    });
    $('#CPT_DATE').datepicker({ format: 'dd-M-yyyy' });

	FormWizardValidation.init();
});

function randomNo() {
    var min=101; 
    var max=1999;  
    var random = Math.random() * (+max - +min) + +min; 
    random = random.toFixed(0);
    return random;
}

function AddRow() {    
    var randomID = randomNo();
    $('#submissions_table tbody').append('<tr id="row_'+randomID+'"> <td id="tbl_domain"></td> <td id="tbl_goal"></td> <td id="tbl_needs"></td> <td id="tbl_actions"></td> <td id="tbl_services"></td> <td id="tbl_repsonsible"></td> <td id="tbl_datecompleted"></td> <td id="tbl_results"></td> <td id="tbl_reasons"></td> <td id="tbl_acts"></td></tr>');
    
    let domain = $('#id_CPT_DOMAIN option:selected').val();
    let goal = $('#id_CPT_GOAL').val();
    let gaps = $('#id_CPT_GAPS option:selected').val();
    let actions = $('#id_CPT_ACTIONS option:selected').val();
    let services = $('#id_CPT_SERVICES option:selected').val();
    let responsibl = $('#id_CPT_RESPONSIBLE option:selected').val();
    let date = $('#CPT_DATE').val();
    let results = $('#id_CPT_RESULTS option:selected').val();
    let reasons = $('#id_CPT_REASONS').val();

    $('#row_'+randomID+' > td#tbl_domain').html( $('select[name=CPT_DOMAIN] option[value='+domain+']').text() + '<input type="hidden" name="h_CPT_DOMAIN" value="'+domain+'" />');
    // console.log("goal == "+goal);
    $('#row_'+randomID+' > td#tbl_goal').empty();
    if(goal.length > 2){ $('#row_'+randomID+' > td#tbl_goal').append('<ul class="ul-flow">'); }
    for (let i = 0; i < goal.length; i++) {
        // $('#row_'+randomID+' > td#tbl_goal ul.ul-flow').append('<li>'+ $("select[name=CPT_GOAL] option[value="+goal[i]+"]").text() + '<input type="hidden" name="h_CPT_GAPS_'+i+'" value="' +$("select[name=CPT_GOAL] option[value="+goal[i]+"]").val()+ '"/> </li>');
        $('#row_'+randomID+' > td#tbl_goal > ul.ul-flow').append('<li>'+ $("select[name=CPT_GOAL] option[value="+goal[i]+"]").text() + '</li>')
    }
    if(goal.length > 2){ $('#row_'+randomID+' > td#tbl_goal').append('</ul>'); }
    $('#row_'+randomID+' > td#tbl_goal').append('<input type="hidden" name="h_CPT_GOAL" value="'+goal+'" />');
    $('#row_'+randomID+' > td#tbl_needs').html( $('select[name=CPT_GAPS] option[value='+gaps+']').text() + '<input type="hidden" name="h_CPT_GAPS" value="'+gaps+'" />');
    $('#row_'+randomID+' > td#tbl_actions').html( $('select[name=CPT_ACTIONS] option[value='+actions+']').text() + '<input type="hidden" name="h_CPT_ACTIONS" value="'+actions+'" />');
    $('#row_'+randomID+' > td#tbl_services').html( $('select[name=CPT_SERVICES] option[value='+services+']').text() + '<input type="hidden" name="h_CPT_SERVICES" value="'+services+'" />' );
    $('#row_'+randomID+' > td#tbl_repsonsible').html( $('select[name=CPT_RESPONSIBLE] option[value='+responsibl+']').text() + '<input type="hidden" name="h_CPT_RESPONSIBLE" value="'+responsibl+'" />');
    $('#row_'+randomID+' > td#tbl_datecompleted').html(date + '<input type="hidden" name="h_CPT_DATE" value="'+date+'" />');
    $('#row_'+randomID+' > td#tbl_results').html( $('select[name=CPT_RESULTS] option[value='+results+']').text() + '<input type="hidden" name="h_CPT_RESULTS" value="'+results+'" />');
    $('#row_'+randomID+' td#tbl_reasons').html('<div>'+reasons+'</div>' + '<input type="hidden" name="h_CPT_RESULTS" value="'+reasons+'" />');
    $('#row_'+randomID+' td#tbl_acts').html('<a href="#" class="removerow btn btn-xs btn-danger"><i class="fa fa-trash"></i> Remove</a>');
    
    console.log(
        'LOG: '+JSON.stringify({
            1: domain,
            2: goal,    
            3: gaps,
            4: actions,
            5: services,
            6: responsibl,
            7: date,
            8: results,
            9: reasons
        })
    )
    $('#row_'+randomID+' > td#tbl_acts > .removerow').click(function (e) { 
        e.preventDefault();
        $('#row_'+randomID).empty();
        $('#row_'+randomID).remove();

        // $(this).closest('tr').empty();
        // $(this).closest('tr').remove();
    });

}