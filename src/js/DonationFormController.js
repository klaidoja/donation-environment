function handleClick() {
    console.log('form inputs are gathered');

    var $donationInputs = $('.donationForm :input');

    var fieldValues = {};
    $donationInputs.each(function () {
        fieldValues[this.name] = $(this).val();
    });

    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/api/donation',
        data: fieldValues,
        dataType: json,
        success: function (result) {
            console.log('request successful');
            console.log(result);
            $('.response').text(result).fadeIn(700, function () {
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
    // $('.donationForm').submit(handleClick());
    $('.btn-lg').on('click', handleClick);
});

