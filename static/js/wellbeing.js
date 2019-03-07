var childrenQuestion={}

var safe_validQns = ['WB_SAF_37_1','WB_SAF_37_2','WB_SAF_38_1','WB_SAF_38_2','WB_SAF_39_1','WB_SAF_39_2','WB_SAF_40_1','WB_SAF_40_2'];
var school_validQns = ['WB_SCH_39_1','WB_SCH_40_1','WB_SCH_41_1','WB_SCH_41_2','WB_SCH_42_1','WB_SCH_42_2','WB_SCH_43_1','WB_SCH_43_2','WB_SCH_44_1','WB_SCH_45_1'];

function loadIndividualChildAnswer(){

}

$('#safetytab > .nav-pills.nav-stacked > li').on('click focus', function(event){
    $('.nav-pills.nav-stacked > li').removeClass('active');
    $(this).addClass('active');
    var childId=$(this).attr('data-child-id');
    var ansObj = {};
    $.each(safe_validQns, function(qindx, ans_name){
      var inpt = $('input[name='+ans_name+']');
      var inpt_type = inpt.attr('type');
      if(inpt_type == 'radio'){
        var answr = $('input[name='+ans_name+']:checked').val();
      }else{
        var answr = inpt.val();
      }
      ansObj[''+ans_name+''] = answr;
      // childrenQuestion[childId].push(qnObj);
    })

    //get values of inputs

    //END get values of inputs
    childrenQuestion[childId]=ansObj;
    console.log(JSON.stringify(childrenQuestion));

    // WB_SAF_36_1,WB_SAF_37_1,WB_SAF_38_1,WB_SAF_39_1
})

$('#schooltab > .nav-pills.nav-stacked > li').on('click focus', function(event){
    $('.nav-pills.nav-stacked > li').removeClass('active');
    $(this).addClass('active');
    var childId=$(this).attr('data-child-id');
    var ansObj = {};
    
    $.each(school_validQns, function(qindx, ans_name){
        var inpt = $('input[name='+ans_name+']');
        var inpt_type = inpt.attr('type');
        
        if(inpt_type == 'radio'){
            var answr = $('input[name='+ans_name+']:checked').val();
            console.log('answr rd: '+answr);
        }
        if(inpt_type == 'date' || inpt_type == 'text' || inpt_type == 'number'){
            var answr = $(this).val();
            console.log('answr: '+answr);
        }
        // checkbox manenos
        var cb_inpt = $('input[type="checkbox"]');
        if(cb_inpt.length > 0){
            var answr_cb = '';
            $.each(cb_inpt, function(indc, cbel){
                if($(this).attr('name') === ans_name && $(this).is(':checked')){
                    answr_cb += $(this).val()+', ';
                }
            });
            console.log('answr_cb: '+answr_cb);
            var answr = answr_cb;
            // ENDcheckbox manenos
        }
        ansObj[''+ans_name+''] = answr;
    })

    //get values of inputs

    //END get values of inputs
    childrenQuestion[childId]=ansObj;
    console.log(JSON.stringify(childrenQuestion));

    // WB_SAF_36_1,WB_SAF_37_1,WB_SAF_38_1,WB_SAF_39_1
})






hideQn('WB_SAF_39_2');
$("input[name='WB_SAF_39_1']").on('change', function () {
    var ival = $("input[name='WB_SAF_39_1']:checked").val();
    if (ival == 'OTHER') {
        unhideQn('WB_SAF_39_2');
    } else {
        hideQn('WB_SAF_39_2');
    }
});

hideQn('WB_SAF_37_2');
$("input[name='WB_SAF_37_1']").on('change', function () {
    var ival = $("input[name='WB_SAF_37_1']:checked").val();
    if (ival == 'OTHER') {
        unhideQn('WB_SAF_37_2');
    } else {
        hideQn('WB_SAF_37_2');
    }
});

hideQn('WB_SAF_38_2');
$("input[name='WB_SAF_38_1']").on('change', function () {
    var ival = $("input[name='WB_SAF_38_1']:checked").val();
    if (ival == 'OTHER') {
        unhideQn('WB_SAF_38_2');
    } else {
        hideQn('WB_SAF_38_2');
    }
});

hideQn('WB_SAF_40_2');
$("input[name='WB_SAF_40_1']").on('change', function () {
    var ival = $("input[name='WB_SAF_40_1']:checked").val();
    if (ival == 'OTHER') {
        unhideQn('WB_SAF_40_2');
    } else {
        hideQn('WB_SAF_40_2');
    }
});

hideQn('WB_SAF_31_2');
$("input[name='WB_SAF_31_1'][value='Other']").on('change', function () {
    var ival = $(this).val();
    if (ival == 'Other' && $(this).prop('checked')) {
        unhideQn('WB_SAF_31_2');
    }else{
        hideQn('WB_SAF_31_2');
    }
});

hideQn('WB_SAF_34_2');
$("input[name='WB_SAF_34_1'][value='Other']").on('change', function () {
    var ival = $(this).val();
    if (ival == 'Other' && $(this).prop('checked')) {
        unhideQn('WB_SAF_34_2');
    }else{
        hideQn('WB_SAF_34_2');
    }
});

hideQn('WB_SAF_36_2');
$("input[name='WB_SAF_36_1'][value='Other']").on('change', function () {
    var ival = $(this).val();
    if (ival == 'Other' && $(this).prop('checked')) {
        unhideQn('WB_SAF_36_2');
    }else{
        hideQn('WB_SAF_36_2');
    }
});

hideQn('WB_SCH_41_2');
$("input[name='WB_SCH_41_1'][value='Other']").on('change', function () {
    var ival = $(this).val();
    if (ival == 'Other' && $(this).prop('checked')) {
        unhideQn('WB_SCH_41_2');
    }else{
        hideQn('WB_SCH_41_2');
    }
});

hideQn('WB_SCH_42_1');
$("input[name='WB_SCH_42_2']").on('change', function () {
    if ($(this).prop('checked')) {
        unhideQn('WB_SCH_42_1');
    }else{
        hideQn('WB_SCH_42_1');
    }
});

hideQn('WB_SCH_43_1');
$("input[name='WB_SCH_43_2']").on('change', function () {
    if ($(this).prop('checked')) {
        unhideQn('WB_SCH_43_1');
    }else{
        hideQn('WB_SCH_43_1');
    }
});



function hideQn(qnID) {
    // $('#' + qnID).addClass('hidden');
    $('#' + qnID).attr("disabled", 'disabled');
    // check if multiselect
    var ms_attr = $('#' + qnID).attr('multiple');
    if (typeof ms_attr !== typeof undefined && ms_attr !== false) {
        $('#' + qnID).multiselect('disable');
    }
    // endCheck
    $('#' + qnID).prop("disabled", true);
    $('#' + qnID).val("");
    $('#' + qnID).removeAttr('required');
}
function unhideQn(qnID) {
    // $('#' + qnID).removeClass('hidden');
    // check if multiselect
    var ms_attr = $('#' + qnID).attr('multiple');
    if (typeof ms_attr !== typeof undefined && ms_attr !== false) {
        $('#' + qnID).multiselect('enable');
    }
    // endCheck
    $('#' + qnID).removeAttr('disabled');
    $('#' + qnID).attr('required');
}