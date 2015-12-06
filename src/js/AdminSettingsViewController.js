function loadAdminSettingsView() {
    $('#pageContent').load('html/adminSettingsView.html');

    $.getJSON('http://localhost:8080/api/faculty')
        .done(function (result) {
            var $adminFacultiesList = $('#adminFacultiesList');
            result.object.forEach(function (faculty) {

                var facultyId = faculty.id;
                var $adminSingleFacultyDiv = $('<div class="jumbotron"></div>').attr('id', facultyId);

                $adminFacultiesList.append($adminSingleFacultyDiv);
                $adminSingleFacultyDiv.append('<p><label>Organisatsiooni nimi:</label><span class="adminSettingsFacultyName"></span></p>');
                $(".adminSettingsFacultyName:last").text(faculty.name);

                $adminSingleFacultyDiv.append('<p><label>Panga konto (IBAN):</label><span class="adminSettingsFacultyIBAN"></span></p>');
                $(".adminSettingsFacultyIBAN:last").text(faculty.bankAccountNr);



                $adminSingleFacultyDiv.append('<button type="button" class="btn btn-info btn-xs nupp">Muuda</button>');
                $adminSingleFacultyDiv.append('<button type="button" class="btn btn-warning btn-xs nupp">Kustuta</button>');

                $adminSingleFacultyDiv.append('<div class="adminFundsList"><p class="adminFund">Fondid:</p></div>');
                faculty.fund.forEach(function (fund) {
                    var $adminFundsList = $('.adminFundsList:last');
                    $adminFundsList.append('<p><label>Nimi:</label><span class="adminSettingsFundName"></span></p>');
                    $(".adminSettingsFundName:last").text(fund.name);
                    $adminFundsList.append('<p><label>Kirjeldus:</label><span class="adminSettingsFundProperty"></span></p>');
                    $(".adminSettingsFundProperty:last").text(fund.paymentExplanation);
                });

                $adminSingleFacultyDiv.append('<button type="button" class="btn btn-primary btn-xs nupp">Lisa fond</button>').data(facultyId);
                $adminFacultiesList.append('<hr>');

            });

            $adminFacultiesList.append('<button type="button" class="btn btn-primary btn-xs nupp">Lisa organisatsioon</button>');

        })
        .fail(function (result) {
            alert("me failed");
        });


}
