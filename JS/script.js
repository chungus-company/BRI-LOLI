$(document).ready(function() { 
    var launchdate = new Date(2019, 8 - 1, 31 - 3, 1 - 01);
    $('#counter').countdown({
        until: launchdate
    });
});