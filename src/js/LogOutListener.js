var tokenNotFoundFunction = function (data) {
    alert('Your session token was not found');
    $('#pageContent').load('html/donationForm.html');
    console.log(data);
};

var logOutSuccessFunction = function (data) {
    var emailKey = sessionStorage.removeItem('emailKey');
    var tokenKey = sessionStorage.removeItem('tokenKey');
    var rolesKey = sessionStorage.removeItem('rolesKey');
    $('#pageContent').load('html/donationForm.html');
    console.log(data);
};

var logOutUnauthorizedFunction = function (data) {
    alert("Sulle pole see tegevus lubatud");
    $('#pageContent').load('html/donationForm.html');
    console.log(data);
};



function logOut(){
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/logout',
        crossDomain: true,
        contentType: "application/json; charset=utf-8",
        dataType: JSON,
        statusCode: {
            200: logOutSuccessFunction,
            404: tokenNotFoundFunction,
            401: logOutUnauthorizedFunction
        }
    });
}
