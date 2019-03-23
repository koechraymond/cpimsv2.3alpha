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


// let cpt_domain_choices = $('select[name=CPT_DOMAIN_CHOICES]');
var cpt_domain_choices = {};
cpt_domain_choices['val'] = [];
cpt_domain_choices['text'] = [];
$("select[name=CPT_DOMAIN] option").each(function(){
    cpt_domain_choices['val'].push($(this).val());
    cpt_domain_choices['text'].push($(this).text());
});
// let cpt_goal_choices = $('select[name=CPT_GOALS_CHOICES]');
var cpt_goal_choices = {};
cpt_goal_choices['val'] = [];
cpt_goal_choices['text'] = [];
$("select[name=CPT_GOALS] option").each(function(){
    cpt_goal_choices['val'].push($(this).val());
    cpt_goal_choices['text'].push($(this).text());
});

// let cpt_gaps_healthy_choices = $('select[name=CPT_GAPS_HEALTHY_CHOICES]');
var cpt_gaps_healthy_choices = {};
cpt_gaps_healthy_choices['val'] = [];
cpt_gaps_healthy_choices['text'] = [];
$("select[name=CPT_GAPS] option").each(function(){
    cpt_gaps_healthy_choices['val'].push($(this).val());
    cpt_gaps_healthy_choices['text'].push($(this).text());
});
// let cpt_actions_healthy_choices = $('select[name=CPT_ACTIONS_HEALTHY_CHOICES]');
var cpt_actions_healthy_choices = {};
cpt_gaps_healthy_choices['val'] = [];
cpt_gaps_healthy_choices['text'] = [];
$("select[name=CPT_ACTIONS] option").each(function(){
    cpt_gaps_healthy_choices['val'].push($(this).val());
    cpt_gaps_healthy_choices['text'].push($(this).text());
});
// let cpt_services_healthy_choices = $('select[name=CPT_SERVICES_HEALTHY_CHOICES]');
var cpt_services_healthy_choices = {};
cpt_services_healthy_choices['val'] = [];
cpt_services_healthy_choices['text'] = [];
$("select[name=CPT_SERVICES] option").each(function(){
    cpt_services_healthy_choices['val'].push($(this).val());
    cpt_services_healthy_choices['text'].push($(this).text());
});
// let cpt_person_responsible = $('select[name=CPT_PERSON_RESPONSIBLE]');
var cpt_person_responsible = {};
cpt_person_responsible['val'] = [];
cpt_person_responsible['text'] = [];
$("select[name=CPT_RESPONSIBLE] option").each(function(){
    cpt_person_responsible['val'].push($(this).val());
    cpt_person_responsible['text'].push($(this).text());
});
// let cpt_results = $('select[name=CPT_RESULTS]');
var cpt_results = {};
cpt_results['val'] = []
cpt_results['text'] = []
$("select[name=CPT_RESULTS] option").each(function(){
    cpt_results['val'].push($(this).val());
    cpt_results['text'].push($(this).text());
});



function AddRow() {
    let domain = $('#id_CPT_DOMAIN option:selected').val();
    let goal = $('#id_CPT_GOAL').val();
    let gaps = $('#id_CPT_GAPS option:selected').val();
    let actions = $('#id_CPT_ACTIONS option:selected').val();
    let services = $('#id_CPT_SERVICES option:selected').val();
    let responsibl = $('#id_CPT_RESPONSIBLE option:selected').val();
    let date = $('#CPT_DATE').val();
    let results = $('#id_CPT_RESULTS option:selected').val();
    let reasons = $('#id_CPT_REASONS').val();

    $('#tbl_domain').html( $('select[name=CPT_DOMAIN] option[value='+domain+']').text() );
    // console.log("goal == "+goal);
    $('#tbl_goal').empty();
    for (let i = 0; i < goal.length; i++) {
        $('#tbl_goal').append('<li>'+ $("select[name=CPT_GAPS] option[value="+goal[i]+"]").text() + '</li>')
    }
    $('#tbl_goal').html(cpt_goal_choices[goal]);
    $('#tbl_needs').html( $('select[name=CPT_GAPS] option[value='+gaps+']').text() );
    $('#tbl_actions').html( $('select[name=CPT_ACTIONS] option[value='+actions+']').text() );
    $('#tbl_services').html( $('select[name=CPT_SERVICES] option[value='+services+']').text() );
    $('#tbl_repsonsible').html( $('select[name=CPT_RESPONSIBLE] option[value='+responsibl+']').text() );
    $('#tbl_datecompleted').html(date);
    $('#tbl_results').html( $('select[name=CPT_RESULTS] option[value='+results+']').text() );
    $('#tbl_reasons').html(reasons);
    $('#tbl_acts').html('<a href="#" class="removerow btn btn-xs btn-danger"><i class="fa fa-trash"></i> Remove</a>');
    
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
    $('.removerow').click(function (e) { 
        e.preventDefault();
        $(this).closest('tr').empty();
        // $(this).closest('tr').remove();
        console.log('removerow');
    });

}