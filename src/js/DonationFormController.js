var successFunction = function (data, textStatus, jqXHR) {
    alert('Donation wish saved');
    console.log(data);
};

var notFoundFunction = function (data, textStatus, jqXHR) {
    alert('This API endpoint was not found!');
};

var validationFailedFunction = function(data, textStatus, jqXHR){
    var errorData = data.responseText.errors;
    alert(errorData);
    console.log(data);
};

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
        dataType: JSON,
        statusCode: {
            201: successFunction,
            404: notFoundFunction,
            422: validationFailedFunction
        }
    })
});

