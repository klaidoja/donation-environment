var successFunction = function (data) {
    alert('Donation wish saved');
    var donationInformation = JSON.parse(data.responseText);
    console.log(donationInformation);
    var $donationFormMainContent = $('#jumbo');
    $donationFormMainContent.empty();
    $donationFormMainContent.append('<div>').text(donationInformation.object.fund.paymentExplanation + '\n' + donationInformation.object.facultyBankAccountNr);
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world.');
    doc.save('Test.pdf');
};

var notFoundFunction = function (data) {
    alert('This API endpoint was not found!');
    console.log(data);
};

var validationFailedFunction = function (data) {
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

