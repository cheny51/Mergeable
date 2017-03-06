var logo = "Mergeable"
var i = 0;

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'slow', 'swing').animate({
        opacity: 1
    }, 'slow', 'swing');
}

function showButtons() {
  $(".buttons").fadeIn();
}

function type() {
  $('#logo').html(logo.substr(0, i++));
  if (i < 10) {
    setTimeout(type, 100)
  }
  if (i==10) {
    setTimeout(showButtons, 100)
  }
}

// Makes sure the e-mail provided is valid.
function isValid(email) {
  email = String(email);
  for(i = 0; i < email.length; i++) {
    if (email[i] == "@") {
      for(var j = i; j < email.length; j++) {
        if (email[j] == ".") {
          return true;
        }
      }
    }
  }
  return false;
}

$(document).ready(function() {
  $(".buttons").hide();
  $("#page2").hide();
  $("#page3").hide();
  type();
  setInterval ('cursorAnimation()', 500);

// Show Sign In Page and Automatically Scroll Down
  $("#sign_in_btn").click(function() {
    $("#page3").hide();
    $("#page2").show();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });

// Show Create Account Page and Automatically Scroll Down
  $("#create_account_btn").click(function() {
    $("#page2").hide();
    $("#page3").show();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
  });

// Give the user an error if they don't enter a valid email/password
  $("#submit").click(function() {
    if ($("#pass").val().length < 8) {
      alert("Invalid password.");
    }
    else if (isValid($("#email").val()) == false) {
      alert("Invalid email.");
    }
    // else {
    //   window.location.href = "/login";
    // }
  })

// Make sure all fields are accurate when a user tries to create an Account
  $("#create").click(function() {
    if($("#pwd").val().length < 8) {
      alert("Passwords must be at least 8 characters.");
    }
    else if ($("#pwd").val() != $("#pwd2").val()) {
      alert("Passwords do not match.");
    }
    else if ($("#f_name").val() < 1 || $("#l_name").val() < 1) {
      alert("First and last name must be at least one character");
    }
    else if (isValid($("#e_mail").val()) == false) {
      alert("Please enter a valid e-mail");
    }
    // else {
    //   window.location.href = "/create";
    // }
  });
});
