function loadAssets() { // jshint ignore:line
    $.holdReady(true);
    var htmlPromises = [
        $('#pageContent').load('html/helloworld.html')
    ];

    $.when(htmlPromises).done(function () {
        console.log('HTML loaded');

        var jsPromises = [
            $.getScript('js/helloWorld.js')
        ];
        $.when(jsPromises).done(function () {
            console.log('JS loaded');
            $.holdReady(false);
        });
    });
}
