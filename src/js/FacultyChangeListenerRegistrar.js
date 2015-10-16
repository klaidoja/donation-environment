function registerFacultyChangeListener() {
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
}
