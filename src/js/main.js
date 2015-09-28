function loadAssets() { // jshint ignore:line
    $.holdReady(true);
    var promises = [
        $('#pageContent').load('html/donationForm.html'),
        $.getScript('js/DonationFormController.js')
    ];

    $.when(promises).done(function () {
        console.log('assets loaded');
        $.holdReady(false);
    });
}
