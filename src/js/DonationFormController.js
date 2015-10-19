$('#donationForm').on('submit', function (e) {
    e.preventDefault();

    console.log('form will now be gathered');

    var fieldValues = {};
    /*
     $donationInputs.each(function () {
     console.log($(this).data());
     fieldValues[this.name] = $(this).val();
     });
     */
    fieldValues['nameIsPublic'] = $('#nameIsPublic').is(':checked');
    fieldValues['name'] = $('#donorName').val();
    fieldValues['email'] = $('#donorEmail').val();
    fieldValues['additionalInformation'] = $('#additionalInformation').val();
    var fundName = $('#fundName').val();
    fieldValues['fund'] = $('.fundNameData').text(fundName).data().id;
    fieldValues['faculty'] = $('input[name=faculty]:checked', '#donationForm').data().id;


    console.log('These are the values gotten with FOR EACH: ');
    console.log(fieldValues);

    alert('Input values are now gathered and shown in the console');
    alert(fieldValues);
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/donation',
        data: fieldValues,
        contentType: "application/json; charset=utf-8",
        dataType: JSON,
        success: function (result) {
            console.log('request successful');
            console.log(result);
        },
        error: function (result) {
            alert('I failed massively!');
            console.log(result);
        }
    });
});

