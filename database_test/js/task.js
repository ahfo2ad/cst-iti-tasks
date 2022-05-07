$(function () {

    // show and hide focus function

    $("[placeholder]").focus(function(){

        $(this).attr("data-text", $(this).attr("placeholder"));

        $(this).attr("placeholder", "");
    }).blur(function(){

        $(this).attr("placeholder", $(this).attr("data-text"));
    });
    
});


$( function() {
    $( "#datepicker" ).datepicker({
        dateFormat: 'yy/mm/dd',
      showOtherMonths: true,
      selectOtherMonths: true
    });
  } );

  $('#btnData').click(function(e){
   e.preventDefault();
   // Code goes here
getData(); // your onclick function call here

});