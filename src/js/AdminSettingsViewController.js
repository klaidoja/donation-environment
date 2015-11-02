function loadAdminSettingsView() {
    $('#pageContent').load('html/adminSettingsView.html');

    $.getJSON('http://localhost:8080/api/faculty')
        .done(function (result) {

            // This section adds radio buttons to form and binds data (payment destination and its funds) from initial GET request with those radio buttons
            result.object.forEach(function (faculty) {
                var $adminFacultiesList = $('#adminFacultiesList');
                $adminFacultiesList.append('<p><label>Organisatsiooni nimi: </label><span class="adminSettingsFacultyName"></span></p>');
                $(".adminSettingsFacultyName:last").text(faculty.name);
                $adminFacultiesList.append('<p><label>Panga konto (IBAN): </label><span class="adminSettingsFacultyIBAN"></span></p>');
                $(".adminSettingsFacultyIBAN:last").text(faculty.bankAccountNr);
                $adminFacultiesList.append('<p><label>Kirjeldus: </label><span class="adminSettingsFacultyDescription"></span></p>');
                $adminFacultiesList.append('<div class="adminFundsList"><h4>Fondid: </h4></div>');
                faculty.fund.forEach(function (fund) {
                    console.log(fund.name);
                    var $adminFundsList = $('.adminFundsList:last');
                    $adminFundsList.append('<p><label>Fondi nimi: </label><span class="adminSettingsFundName"></span></p>');
                    $(".adminSettingsFundName:last").text(fund.name);
                    $adminFundsList.append('<p><label>Makse kirjeldus: </label><span class="adminSettingsFundProperty"></span></p>');
                    $(".adminSettingsFundProperty:last").text(fund.paymentExplanation);
                });
                $adminFacultiesList.append('<hr>');

            });

        })
        .fail(function (result) {
            alert("me failed");
        });


}
