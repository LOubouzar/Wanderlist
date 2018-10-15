
//Function to add and take away items in checklist
// $(function () {
//     $("#btnAdd").bind("click", function () {
//         var div = $("<tr />");
//         div.html(GetDynamicTextBox("", "", "", ""));
//         $("#TextBoxContainer").append(div);
//     });
//     $("body").on("click", ".remove", function () {
//         $(this).closest("tr").remove();
//     });
// });
// function GetDynamicTextBox(value1, value2, value3, value4) {
//     return '<td><input name = "DynamicTextBox" type="text" value = "' + value1 + '" class="item form-control" /></td>'
//     + '<td><input name = "DynamicTextBox" type="text" value = "' + value2 + '" class="quantity form-control" /></td>' + value3 +
//      '" /></td>' + '<td><input name = "DynamicTextBox" type="checkbox" value = "' + value4 + '" class="packed" /></td>' +
//       '<td><button type="button" class="btn btn-danger remove"><i class="fa fa-trash" aria-hidden="true"></i></button></td>'
//
// }

$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?post_id=23)
  var url = window.location.search;
  var listId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In localhost:8080/cms?post_id=1, postId is 1
  if (url.indexOf("?list_id=") !== -1) {
    listId = url.split("=")[1];
    getListData(listId);
  }

  // getting elements by class/id
  var itemInput = $(".item");
  var quantityInput = $(".quantity");
  var packedInput = $(".packed");
  var listForm = $("#listForm");
  console.log(quantityInput);

  // on submit form el
  $(listForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // wont submit if item or quantity fields are empty
    if (!quantityInput.val().trim() || !itemInput.val().trim()) {
      return alert("Please complete the form fields.");
    }
    // newList DB entry with input values
    var newList = {
      quantity: quantityInput.val().trim(),
      item: itemInput.val().trim(),
      packed: packedInput.val()
    };

    console.log(newList);

    // If we're updating a list item, then run update function
    // If not updating then submit function
    if (updating) {
      newList.id = listId;
      updateList(newList);
    }
    else {
      submitList(newList);
    }
  });

  // Submits a new list and brings user to list
  function submitList(List) {
    $.post("/api/lists/", List, function() {
      window.location.href = "/list";
    });
  }

  // get list data ?
  function getListData(id) {
    $.get("/api/lists/" + id, function(data) {
      if (data) {
        // If list exists, change form input vals to list data
        quantityInput.val(data.quantity);
        itemInput.val(data.item);
        packedInput.val(data.packed);
        // If we have a list with this info, update it
        updating = true;
      }
    });
  }

  // Update a given post, bring user to the blog page when done
  function updateList(post) {
    $.ajax({
      method: "PUT",
      url: "/api/lists",
      data: post
    })
      .then(function() {
        window.location.href = "/list";
      });
  }
});




//value1= item name
//value2= quantity
//value3= nothing (don't really need)
//value4= packed