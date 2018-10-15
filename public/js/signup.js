// Toggle password visibility 
function myFunction() {
  var x = document.getElementById("passwordInput");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
}

//WHITE SCROLL

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("bg-dark");
    } else {
      $(".navbar").removeClass("bg-dark");
    }
  });

  var signUpForm = $("form.signUp");
  var emailInput = $("input#emailInput");
  var passwordInput = $("input#passwordInput");

  signUpForm.on("submit", function (event) {
    
    event.preventDefault();
    console.log("Hi!");
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    signUpUser(userData.email, userData.password);
    var emailTest = emailInput.val("");
    console.log(emailTest);
    passwordInput.val("");
  });

  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function (data) {
      window.location.replace(data);
    }).catch(handleLoginErr);
  };

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  };

});









