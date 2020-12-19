$(document).ready(function(){
    // Create button and append to the end of body
    var back_to_top_button = ['<a href="#top" class="back-to-top"><img src="../img/arrow-up.svg" class="arrow-up" alt=""></a>'].join("");
    $("body").append(back_to_top_button);

    // Hide button
    $(".back-to-top").hide();

    // Scroll bahaviour function
    $(function(){
        $(window).scroll(function(){
            // When 100px are scrolled
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

        $('.back-to-top').click(function() {
            // Click on button
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
})