$(function () {
    $('#pageContent').load('html/helloworld.html');
});

$(document).ready(function () {
    console.log('loaded');
    $('.request').click(function () {
        console.log('request on its way');
    });
});
