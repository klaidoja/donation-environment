$('#donationForm').on('submit', function (e) {
    e.preventDefault();

    var fieldValues = {};

    fieldValues['nameIsPublic'] = $('#nameIsPublic').is(':checked');
    fieldValues['name'] = $('#donorName').val();
    fieldValues['email'] = $('#donorEmail').val();
    fieldValues['additionalInformation'] = $('#additionalInformation').val();
    var fundName = $('#fundName').val();
    fieldValues['fund'] = $('.fundNameData').text(fundName).data().id;

    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/donation',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(fieldValues),
        dataType: JSON
    }).done(function (result) {
        alert('request successful');
        console.log(result);
    }).fail(function (result) {
        alert('request failed');
        console.log(result);
    });
});

