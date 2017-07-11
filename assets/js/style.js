$(document).ready(function() {
    // Stop that annoying back to top that results in pressing <a href="#">..</a>
    $('a').click(function(event) {
        var destination = $(event.target).attr('href');
        if (destination == '#' || destination == '') {
            event.preventDefault();
        }
    });

    // Add ripple effect to buttons
    $('.btn').addClass('ripple');

    // Instanciate select2 on all select boxes except those with class .no-select
    $('select').not('.no-select').select2();

    // Add styling to forms
    $('form .form-group').append('<div class="bar"></bar>');
});

$(document).ready(function() {
    // ripple.registerRipples();
});