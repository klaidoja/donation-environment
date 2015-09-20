function handleClick() {
    console.log('request on its way');

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

function loaded() {
    $(document).ready(function () {
        console.log('loaded');

        $('.request').click(handleClick);
    });
}

$(function () {
    $('#pageContent').load('html/helloworld.html', loaded);
});


