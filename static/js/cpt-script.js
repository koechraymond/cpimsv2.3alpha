jQuery(document).ready(function()
{
	 //multi selects
    $('.goals_cell > div > select').multiselect({
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
    
    // onDomainChange
    $('select[name=CPT_DOMAIN]').change(function (e) { 
        // e.preventDefault();
        var domain_val = $('select[name=CPT_DOMAIN] option:selected').val();
        if(domain_val === 'SCH'){
            $('.school_form').each(function () {
                $(this).removeClass('hidden');
            })
            $('.healthy_form, .stable_form, .safe_form').each(function () {
                $(this).addClass('hidden');
            })
        }else if(domain_val === 'STB'){
            $('.healthy_form, .safe_form, .school_form').each(function () {
                $(this).addClass('hidden');
            })
            $('.stable_form').each(function () {
                $(this).removeClass('hidden');
            })
        }else if(domain_val === 'SF'){
            $('.healthy_form, .school_form, .stable_form').each(function () {
                $(this).addClass('hidden');
            })
            $('.safe_form').each(function () {
                $(this).removeClass('hidden');
            })
        }else if(domain_val === 'HE'){
            $('.stable_form, .safe_form, .school_form').each(function () {
                $(this).addClass('hidden');
            })
            $('.healthy_form').each(function () {
                $(this).removeClass('hidden');
            })
        }
    });
    // onDomainChange
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
    // let goal = $('.goals_cell > div:not(.hidden) > select > option').val();
    let goal = []
    $('.goals_cell > div:not(.hidden) > select > option').each(function () {
        var vlu = $(this).val()
        goal.push(vlu);
    })
    let gaps = $('.gaps_cell > div:not(.hidden) > select > option:selected').val();
    let actions = $('.actions_cell > div:not(.hidden) > select > option:selected').val();
    let services = $('.services_cell > div:not(.hidden) > select > option:selected').val();
    let responsibl = $('#id_CPT_RESPONSIBLE option:selected').val();
    let date = $('#CPT_DATE').val();
    let results = $('#id_CPT_RESULTS option:selected').val();
    let reasons = $('#id_CPT_REASONS').val();

    $('#row_'+randomID+' > td#tbl_domain').html( $('select[name=CPT_DOMAIN] option[value='+domain+']').text() + '<input type="hidden" name="h_CPT_DOMAIN" value="'+domain+'" />');
    // console.log("goal == "+goal);
    $('#row_'+randomID+' > td#tbl_goal').empty();
    
    $('.goals_cell > div:not(.hidden) > select > option').each(function () {
        var txt = $(this).text();
        $('#row_'+randomID+' > td#tbl_goal').append( '<li>'+txt+'</li>' );
    })

    $('#row_'+randomID+' > td#tbl_goal').append('<input type="hidden" name="h_CPT_GOAL" value="'+goal+'" />');
    $('#row_'+randomID+' > td#tbl_needs').html( $('.gaps_cell > div:not(.hidden) > select > option[value='+gaps+']').text() + '<input type="hidden" name="h_CPT_GAPS" value="'+gaps+'" />');
    $('#row_'+randomID+' > td#tbl_actions').html( $('.actions_cell > div:not(.hidden) > select > option[value='+actions+']').text() + '<input type="hidden" name="h_CPT_ACTIONS" value="'+actions+'" />');
    $('#row_'+randomID+' > td#tbl_services').html( $('.services_cell > div:not(.hidden) > select > option[value='+services+']').text() + '<input type="hidden" name="h_CPT_SERVICES" value="'+services+'" />' );
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