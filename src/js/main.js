function loadAssets() { // jshint ignore:line
    $.holdReady(true);
    var promises = [
        $('#pageContent').load('html/donationForm.html'),
        $.getScript('js/DonationFormController.js'),
        $.getScript('js/FormDataInitController.js'),
        $.getScript('js/FacultyChangeListenerRegistrar.js'),
        $.getScript('js/admin.js')
    ];

    $.when(promises).done(function () {
        console.log('assets loaded');
        $.holdReady(false);
    });
}

