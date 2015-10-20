$(document).ready(function() {

// only run this script if the screen size is larger than 480
if ($(window).width() > 480) {

    // hide all nested UL's except for the first one
    $(".accordian li:not(:first-child) ul").hide();
    
    // when the title is clicked, toggle the nested UL
    // if UL is already open, close it
    $(".accordian h2").click(function() {
        if($(this).next().is(":visible") != "1") {
            $(".accordian-panel").slideUp();
        }
        $(this).next().slideToggle(); 
    });
}
    
});