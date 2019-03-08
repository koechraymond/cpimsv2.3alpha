var childrenQuestion={}
var childrenQuestion2={}
var safe_validQns = ['WB_SAF_37_1','WB_SAF_37_2','WB_SAF_38_1','WB_SAF_38_2','WB_SAF_39_1','WB_SAF_39_2','WB_SAF_40_1','WB_SAF_40_2'];
var school_validQns = ['WB_SCH_39_1','WB_SCH_40_1','WB_SCH_41_1','WB_SCH_41_2','WB_SCH_42_1','WB_SCH_42_2','WB_SCH_43_1','WB_SCH_43_2','WB_SCH_44_1','WB_SCH_45_1'];


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
    console.log("the error log gone");
    console.log(JSON.stringify(childrenQuestion));
    $('#safeanswer').val(JSON.stringify(childrenQuestion));
});


$('#schooltab > .nav-pills.nav-stacked > li').on('click focus', function(event){
    $('.nav-pills.nav-stacked > li').removeClass('active');
    $(this).addClass('active');
    var childId=$(this).attr('data-child-id');
    var ansObj = {};
    
    $.each(school_validQns, function(qindx, ans_name){
        var inpt = $('input[name='+ans_name+']');
        var inpt_type = inpt.attr('type');

       // console.log(inpt);
        console.log(inpt_type);

        if(inpt_type == 'radio'){
            var answr = $('input[name='+ans_name+']:checked').val();
            ansObj[''+ans_name+''] = answr;
        }
        if(inpt_type == 'checkbox'){
            var answerList=[];
            var selectedCheckboxes = $('input[name='+ans_name+']:checked');
            $.each(selectedCheckboxes, function(indx, curElement){
                answerList.push($(curElement).val());
            });
            ansObj[''+ans_name+''] = answerList;
        }

        if(inpt_type == 'text' || inpt_type == 'number'){
            var answr = $('input[name='+ans_name+']').val();
            ansObj[''+ans_name+''] = answr;
        }

        childrenQuestion2[childId]=ansObj;
        $('#schooledanswer').val(JSON.stringify(childrenQuestion2));
    });

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

hideQn('WB_SCH_41_2');
$("input[name='WB_SCH_41_1']").on('change', function () {
  var ival = $(this).val();
    if (ival == 'Other' && $(this).is(':checked')) {
        unhideQn('WB_SCH_41_2');
    }else{
        hideQn('WB_SCH_41_2');
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