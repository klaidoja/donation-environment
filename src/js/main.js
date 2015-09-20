function handleClick() {
    console.log('request on its way');

    $.ajax
    ({
        url: 'reservebook.php',
        type: 'get',
        success: function (result) {
            alert('request successful' + result);
            /*$('.modal-box').text(result).fadeIn(700, function () {
                setTimeout(function () {
                    $('.modal-box').fadeOut();
                }, 2000);
            });*/
        },
        error: function (result) {
            alert('request failed' + result);
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


