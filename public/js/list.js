$(document).ready(function () {
    //Added white scroll to navbar   
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $(".navbar").addClass("bg-dark");
        } else {
            $(".navbar").removeClass("bg-dark");
        }
    });
    //Function to add and take away items in checklist
    $(function () {
        $("#btnAdd").bind("click", function () {
            var div = $("<tr />");
            div.html(GetDynamicTextBox("", "", "", ""));
            $("#TextBoxContainer").append(div);
        });
        $("body").on("click", ".remove", function () {
            $(this).closest("tr").remove();
        });
    });
    function GetDynamicTextBox(value1, value2, value3, value4) {
        //value1= item name
        //value2= quantity
        //value3= nothing (don't really need)
        //value4= packed
        return '<td><input name = "DynamicTextBox" type="text" value = "' + value1 + '" class="form-control" /></td>'
            + '<td><input name = "DynamicTextBox" type="text" value = "' + value2 + '" class="form-control" /></td>' + value3 +
            '" /></td>' + '<td><input name = "DynamicTextBox" type="checkbox" ' + value4 + ' /></td>' +
            '<td><button type="button" class="btn btn-danger remove"><i class="fa fa-trash" aria-hidden="true"></i></button></td>'
    };

    // process the Hotel form
    $("hotelForm").submit(function (event) {

        var hotelformData = {
            "arrivalDates": $("input[arrivalDates]").val(),
            "departureDates": $("input[departureDates]").val(),
            "streetAddress": $("input[streetAddress]").val(),
            "country": $("input[country]").val(),
            "zipCode": $("input[zipCode]").val(),
            "hotelConfirm": $("input[hotelConfirm]").val(),
        };

        $.ajax({
            type: "POST",
            url: "server.js",
            data: hotelformData,
            dataType: "JSON",
            encode: true
        })
            .done(function (data) {
                console.log("HotelForm test", data);
            });
        event.preventDefault();
    });

    // process the Flight form
    $("flightForm").submit(function (event) {

        var flightformData = {
            // depart Flight Form
            "departName": $("input[departName]").val(),
            "departPort": $("input[departPort]").val(),
            "departArrTime": $("input[departArrTime]").val(),
            "departArrPort": $("input[departArrPort]").val(),
            "departFlightNum": $("input[departFlightNum]").val(),
            "departSeatNum": $("input[departSeatNum]").val(),
            "departConfirmNume": $("input[departConfirmNum]").val(),
            
            //Return Flight Form
            "returnTime": $("input[returnTime]").val(),
            "returnPort": $("input[returnPort]").val(),
            "returnArrTime": $("input[returnArrTime]").val(),
            "returnArrPort": $("input[returnArrPort]").val(),
            "returnFlightNum": $("input[returnFlightNum]").val(),
            "returnSeatNum": $("input[returnSeatNum]").val(),
            "returnConfirmNum": $("input[returnConfirmNum]").val(),
            
            // Button Submit
            "flightConfirm": $("input[flightConfirm]").val(),
        };

        $.ajax({
            type: "POST",
            url: "server.js",
            data: flightformData,
            dataType: "JSON",
            encode: true
        })
            .done(function (data) {
                console.log("FlightForm test", data);
            });
        event.preventDefault();
    });

});