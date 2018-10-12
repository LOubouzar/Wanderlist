// Toggle password visibility 
function myFunction() {
  var x = document.getElementById("passwordInput");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
}

$(document).ready(function(){
    var loginForm = $("form.login");
    var emailInput = $("input#emailInput") 
    var passwordInput =$("input#passwordInput");

    loginForm.on("login", function(event) {
        event.preventDefault();
        var userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };
    
        if (!userData.email || !userData.password) {
          return;
        }
    
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
      });
    
      function loginUser(email, password) {
        $.post("/api/login", {
          email: email,
          password: password
        }).then(function(data) {
          window.location.replace(data);
        }).catch(function(err) {
          console.log(err);
        });
      }


});