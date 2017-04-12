$( document ).ready(function() {
    console.log( "ready!" );
    if ($('#mainNavSection').hasClass('active')) {
        console.log("true");
        $('#navbarForm').addClass('hide');
    } else if (!$('#mainNavSection').hasClass('active')) {
        console.log("false");
        $('#navbarForm').removeClass('hide');
    } else {
        console.log('error');
    }
      $('.short-main').hover(function() {

        $('.short-section').toggleClass('hidden');
        $('.short-section').toggleClass('show');
    });
});