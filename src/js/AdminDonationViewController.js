function loadAdminDonationsView() {
    $('#pageContent').load('html/adminMainView.html');

    $.getJSON('http://localhost:8080/api/donation')
        .done(function (result) {
            var $adminDonationTable = $('#adminDonationTable');
            $adminDonationTable.empty();
            result.object.forEach(function (donation) {
                var $donation = $('<tr>');
                $('<td>').text(donation.dateCreated).appendTo($donation);
                $('<td>').text(donation.name).appendTo($donation);
                $('<td>').text(donation.faculty).appendTo($donation);
                $('<td>').text(donation.fund.name).appendTo($donation);
                $('<td>').text(donation.nameIsPublic).appendTo($donation);
                $('<td>').text(donation.additionalInformation).appendTo($donation);
                $('<td>').appendTo($donation).attr('id', donation.id).addClass('tableDataForDelete');
                var donationId = donation.id;
                $donation.appendTo($adminDonationTable);
                $('#' + donationId).append('<button class="deleteDonation " type="button">Delete</button>');
                $('.deleteDonation:last').data(donation);


            });
            listenerForDonationDeleteEvent();
            console.log(result);
        })
        .fail(function (result) {
            alert("GET request for all donations failed");
        });
}

function listenerForDonationDeleteEvent() {
    $('.deleteDonation').on('click', function (e) {
        e.preventDefault();

        var donationId = $(this).data().id;
        console.log(donationId);

        var requestData = {
            id: donationId
        };

        $.ajax({
            type: 'delete',
            url: 'http://localhost:8080/api/donation/' + donationId,
            contentType: "application/json; charset=utf-8",
            statusCode: {
                200: alert('i deleted'),
                404: alert('i failed')
            }
        });

    });
}
