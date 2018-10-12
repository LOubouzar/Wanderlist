
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
    return '<td><input name = "DynamicTextBox" type="text" value = "' + value1 + '" class="form-control" /></td>' 
    + '<td><input name = "DynamicTextBox" type="text" value = "' + value2 + '" class="form-control" /></td>' + value3 +
     '" /></td>' + '<td><input name = "DynamicTextBox" type="checkbox" ' + value4 + ' /></td>' +
      '<td><button type="button" class="btn btn-danger remove"><i class="fa fa-trash" aria-hidden="true"></i></button></td>'

}

//value1= item name
//value2= quantity
//value3= nothing (don't really need)
//value4= packed