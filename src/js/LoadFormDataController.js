$(document).ready(function () {
    console.log('me here');

    $.getJSON('http://localhost:8080/api/faculty')
        .done(function (result) {
            alert("me success");
        })
        .fail(function (result) {
            alert("me failed");
        })
});
