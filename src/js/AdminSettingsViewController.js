function loadAdminSettingsView() {
    $('#pageContent').load('html/adminSettingsView.html');

    $.getJSON('http://localhost:8080/api/faculty')
        .done(function (result) {

            // This section adds radio buttons to form and binds data (payment destination and its funds) from initial GET request with those radio buttons
            result.object.forEach(function (faculty) {
                console.log(faculty.object);
                var $adminFacultiesList = $('#adminFacultiesList');
                $adminFacultiesList.append('<p><label>Organisatsiooni nimi:</label><span class="adminSettingsFacultyName"></span></p>');
                $(".adminSettingsFacultyName:last").text(faculty.name);
                $adminFacultiesList.append('<p><label>Panga konto (IBAN):</label><span class="adminSettingsFacultyIBAN"></span></p>');
                $(".adminSettingsFacultyIBAN:last").text(faculty.bankAccountNr);
                $adminFacultiesList.append('<p><label>Kirjeldus:</label><span class="adminSettingsFacultyDescription"></span></p><hr>');
                $(".adminSettingsFacultyDescription:last").text(faculty.id);
            });

        })
        .fail(function (result) {
            alert("me failed");
        });


}
