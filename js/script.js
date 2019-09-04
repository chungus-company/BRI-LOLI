$(document).ready(function() { 
    var launchdate = new Date(2019, 8 - 1, 31 - 3, 1 - 01);//la fecha de lanzamiento del proyecto
    $('#counter').countdown({
        until: launchdate
    });
});