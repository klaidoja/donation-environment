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

            // If a given radio button is selected then data binded with that radio button is added to a dropdown containing list of funds with that payment destination
            $("input[name=faculty]").change(function () {

                // If fund name in dropdown menu from previous payment destination exists they will be removed before adding new fund name
                var dropDownFieldValue = $('option.fundNameData');
                if (dropDownFieldValue.length) {
                    dropDownFieldValue.remove();
                }

                var elementData = $(this).data();

                elementData.fund.forEach(function (fund) {
                    $("#fundName").append('<option class="fundNameData"></option>');
                    $(".fundNameData:last").text(fund.name).data(fund);
                });
            });

        })
        .fail(function (result) {
            alert("me failed");
        });
});
