function loadAdminSettingsView() {
    $('#pageContent').load('html/adminSettingsView.html');

    $.getJSON('http://localhost:8080/api/faculty')
        .done(function (result) {
            result.object.forEach(function (faculty) {
                var $adminFacultiesList = $('#adminFacultiesList');
                $adminFacultiesList.append('<p><label>Organisatsiooni nimi:</label><span id="toTheLeft" class="adminSettingsFacultyName"></span> <button type="button" class="asText">Muuda</button></p>');
                $(".adminSettingsFacultyName:last").text(faculty.name);
                $adminFacultiesList.append('<p><label>Panga konto (IBAN):</label><span id="toTheLeft" class="adminSettingsFacultyIBAN"></span> <button type="button" class="asText">Muuda</button></p>');
                $(".adminSettingsFacultyIBAN:last").text(faculty.bankAccountNr);
                $adminFacultiesList.append('<div class="adminFundsList"><p id="adminFund">Fondid:</p></div>');
                faculty.fund.forEach(function (fund) {
                    var $adminFundsList = $('.adminFundsList:last');
                    $adminFundsList.append('<p><label>Nimi:</label><span id="toTheLeft" class="adminSettingsFundName"></span> <button type="button" class="asText">Muuda</button></p>');
                    $(".adminSettingsFundName:last").text(fund.name);
                    $adminFundsList.append('<p><label>Kirjeldus:</label><span id="toTheLeft" class="adminSettingsFundProperty"></span> <button type="button" class="asText">Muuda</button></p>');
                    $(".adminSettingsFundProperty:last").text(fund.paymentExplanation);
                });
                $adminFacultiesList.append('<hr>');

            });

        })
        .fail(function (result) {
            alert("me failed");
        });


}
