$(document).ready(function() {
    $('a').click(function(event) {
        var destination = $(event.target).attr('href');
        if (destination == '#' || destination == '') {
            event.preventDefault();
        }
    });
});