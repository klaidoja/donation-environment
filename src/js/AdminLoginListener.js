var loginSuccessFunction = function (data) {
    $('#loginForm').modal('hide');
    $('body').removeClass('modal-open');
    $('div').removeClass('modal-backdrop fade in');
    var loginInformation = JSON.parse(data.responseText);

    sessionStorage.setItem('tokenKey', loginInformation.access_token);
    sessionStorage.setItem('rolesKey', loginInformation.roles);
    sessionStorage.setItem('emailKey', loginInformation.username);

    $.ajaxSetup({
        headers: {'Authorization': 'Bearer ' + loginInformation.access_token}
    });
    loadAdminDonationsView();
};

var authorisationFailedFunction = function (data) {
    alert("Sinu sisestatud kasutajaandmed on valed.");
    console.log(data);
};

var userNotFoundFunction = function (data) {
    alert('This API endpoint was not found!');
    console.log(data);
};

var loginValidationFailedFunction = function (data) {
    var emailKey = sessionStorage.removeItem('emailKey');
    var tokenKey = sessionStorage.removeItem('tokenKey');
    var rolesKey = sessionStorage.removeItem('rolesKey');
    alert("Sinu sessioon on aegunud.");
    console.log(data);
};

var validationSuccessFunction = function (data) {
    loadAdminDonationsView();
};


function toggleAdminLogin() {

    var emailKey = sessionStorage.getItem('emailKey');
    var tokenKey = sessionStorage.getItem('tokenKey');
    var rolesKey = sessionStorage.getItem('rolesKey');

    if (!emailKey || !tokenKey || !rolesKey) {
        $('#loginForm').modal('toggle');


        $('#loginForm').on('submit', function (e) {

            e.preventDefault();

            var fieldValues = {};

            fieldValues['email'] = $('#login_username').val();
            fieldValues['password'] = $('#login_password').val();

            $.ajax({
                type: 'post',
                url: 'http://localhost:8080/api/loginToken',
                crossDomain: true,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(fieldValues),
                dataType: JSON,
                statusCode: {
                    200: loginSuccessFunction,
                    401: authorisationFailedFunction,
                    404: userNotFoundFunction,
                    422: loginValidationFailedFunction
                }
            });

        })
    }
    else {
        $.ajaxSetup({
            headers: {'Authorization': 'Bearer ' + tokenKey}
        });

        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/api/validate',
            contentType: "application/json; charset=utf-8",
            dataType: JSON,
            statusCode: {
                200: validationSuccessFunction,
                401: loginValidationFailedFunction,
                404: userNotFoundFunction,
                422: loginValidationFailedFunction
            }
        });

    }
}
