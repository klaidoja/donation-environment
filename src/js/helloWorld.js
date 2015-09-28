function handleClick() {
    console.log('form inputs are gathered');

    var $donationInputs = $('.donationForm :input');


    var fieldValues = {};
    $donationInputs.each(function() {
        fieldValues[this.name] = $(this).val();
    });

    $.ajax
    ({
        url: 'http://localhost:8080/api/hello',
        type: 'get',
        success: function (result) {
            console.log('request successful');
            console.log(result);
            $('.response').text(result.key).fadeIn(700, function () {
                setTimeout(function () {
                    $('.response').fadeOut();
                }, 100000);
            });
        },
        error: function (result) {
            console.log('request failed');
            console.log(result);
        }
    });
}

$(document).ready(function () {
    console.log('document loaded');
    $('.donationForm').submit(handleClick());
});

