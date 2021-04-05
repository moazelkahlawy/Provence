$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change');
    });

    $("html").niceScroll({
        cursorcolor: "#a52a2a",
        cursorwidth: "10px",
        cursorborder: false,
    });
});
