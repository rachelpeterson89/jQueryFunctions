$(document).ready(function () {

    $('#clickToHide').click(function () {
        $('#hideParagraph').hide();
    });

    $('#clickToShow').click(function () {
        $('#showParagraph').show();
    });

    $('#clickToToggle').click(function () {
        $('#toggleParagraph').toggle();
    });

    $('#clickToSlideDown').click(function () {
        $('#slideDownParagraph').slideDown('slow');
    });

    $('#clickToSlideUp').click(function () {
        $('#slideUpParagraph').slideUp('slow');
    });

    $('#clickToSlideToggle').click(function () {
        $('#slideToggleParagraph').slideToggle('slow');
    });

    $('#clickToFadeIn').click(function () {
        $('#captMarvel').fadeIn('slow');
    });

    $('#scarletWitch').hover(function () {
        $('#scarletWitch').fadeOut('slow');
    });

    $('#clickToAddClass').click(function () {
        $('#addClassParagraph').addClass('highlight');
    });

    $('#clickToBefore').click(function () {
        $('#beforeParagraph').before('This text was added by jQuery!');
    });

    $('#clickToAfter').click(function () {
        $('#afterParagraph').after('This text was added by jQuery!');
    });

    $('#drStrange').hover(function () {
        $('#appendParagraph').append(" Look at me, I'm Doctor Strange!");
    });

    $('#clickToChange').click(function () {
        $('#replaceHTML').html("hmm, that's too bad");
    });

    $('#clickToShrink').click(function () {
        var v = $('#hulk').attr("width");
        $('#hulk').attr("width",v-10);
    });

    $('#submit').click(function () {
        var x = $('#text').val();
        $('#replaceHTML1').text(x);
    });

});