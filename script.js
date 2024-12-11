$(document).ready(function() {
    // Smooth scrolling for navigation
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Add hover effects to sections
    $('section').hover(
        function() {
            $(this).css('transform', 'scale(1.02)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Navigation highlight on current page
    $('nav a').each(function() {
        if ($(this).attr('href') === window.location.pathname.split('/').pop()) {
            $(this).addClass('active');
        }
    });
});