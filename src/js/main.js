function loadAssets() { // jshint ignore:line
    $.holdReady(true);
    var promises = [
        $('#pageContent').load('html/donationForm.html'),
        $.getScript('js/DonationFormController.js'),
        $.getScript('js/FormDataInitController.js'),
        $.getScript('js/FacultyChangeListenerRegistrar.js')
    ];

    $.when(promises).done(function () {
        console.log('assets loaded');
        $.holdReady(false);
    });
}

function loadAssetsAdmin() {
    $.holdReady(true);
    var promisesAdmin = [
        $('#pageContent').load('html/adminPage.html')
    ];

    $.when(promisesAdmin).done(function () {
        console.log('admin loaded');
        $holdReady(false);
    })
}
