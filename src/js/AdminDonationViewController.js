function loadAdminDonationsView(){
    $('#pageContent').load('html/adminMainView.html');

    $.getJSON('http://localhost:8080/api/donation')
        .done(function (result) {
            var $adminDonationTable = $('#adminDonationTable');
            $adminDonationTable.empty();
            result.object.forEach(function(donation){
                var $donation = $('<tr>').appendTo($adminDonationTable);
                $('<td>').text(donation.dateCreated).appendTo($donation);
                $('<td>').text(donation.name).appendTo($donation);
                $('<td>').text(donation.faculty).appendTo($donation);
                $('<td>').text(donation.fund.name).appendTo($donation);
                $('<td>').text(donation.nameIsPublic).appendTo($donation);
                $('<td>').text(donation.additionalInformation).appendTo($donation);

            });
            console.log(result);
        })
        .fail(function (result) {
            alert("GET request for all donations failed");
        });
}
