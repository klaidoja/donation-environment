function loadAssets() { // jshint ignore:line
    $.holdReady(true);
    var promises = [
        $('#pageContent').load('html/helloworld.html')
        ];

    $.when(promises).done(function () {
        console.log('Scripts loaded');
        $.holdReady(false);
    });
}

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

$(document).ready(function () {
    console.log('document loaded');
    $('.request').click(handleClick);
});
