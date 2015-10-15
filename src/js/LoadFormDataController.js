$(document).ready(function () {
    console.log('me here');

    $.getJSON('http://localhost:8080/api/faculty')
        .done(function (result) {

            result.object.forEach(function (faculty) {
                $("#formFaculties").append('<div class="radio-inline"><label><input type="radio" name="faculty"><span class="facultyLabelName"></span></label></div>');
                $(".facultyLabelName:last").text(faculty.name);
            });
        })
        .fail(function (result) {
            alert("me failed");
        })
});
