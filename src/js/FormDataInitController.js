$(document).ready(function () {
    console.log('me here');

    $.getJSON('http://localhost:8080/api/faculty')
        .done(function (result) {

            // This section adds radio buttons to form and binds data (payment destination and its funds) from initial GET request with those radio buttons
            result.object.forEach(function (faculty) {
                $("#formFaculties").append('<div class="radio-inline"><label><input type="radio" class="facultyData" name="faculty"><span class="facultyLabelName"></span></label></div>');
                $(".facultyData:last").data(faculty);
                $(".facultyLabelName:last").text(faculty.name);
            });

            registerFacultyChangeListener();

        })
        .fail(function (result) {
            alert("me failed");
        });
});
