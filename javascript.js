var openPage = function() {
	$('#cover-page').animate({
      top: '-100vh',
      opacity: '0',
      margin: '0px'
    }, 1500, function(){ 
      $('#cover-page').hide();
    });
}

$(window).scroll(function() {
	openPage();
})

$(window).click(function() {
	openPage();
})

$(window).keypress(function() {
  openPage();
})


// HOVER SHOW ON MEMBERSHIP PAGE

$('#hover-show-1').mouseenter(function() {
  $('.hover-show-div').hide()
  $('#hover-show-1-div').show()
  $('.hover-show strong').removeClass('red')
  $('#hover-show-1 strong').addClass('red')
})


$('#hover-show-2').mouseenter(function() {
  $('.hover-show-div').hide()
  $('#hover-show-2-div').show()
  $('.hover-show strong').removeClass('red')
  $('#hover-show-2 strong').addClass('red')
})

$('#hover-show-3').mouseenter(function() {
  $('.hover-show-div').hide()
  $('#hover-show-3-div').show()
  $('.hover-show strong').removeClass('red')
  $('#hover-show-3 strong').addClass('red')
})

$('#hover-show-4').mouseenter(function() {
  $('.hover-show-div').hide()
  $('#hover-show-4-div').show()
  $('.hover-show strong').removeClass('red')
  $('#hover-show-4 strong').addClass('red')
})

$('#hover-show-5').mouseenter(function() {
  $('.hover-show-div').hide()
  $('#hover-show-5-div').show()
  $('.hover-show strong').removeClass('red')
  $('#hover-show-5 strong').addClass('red')
})

// APPLICATION

$('#invite-code').click(function(){
  $('#invite-select').css( "display", "block" )
});

$('#get-form').click(function(){

  $('#form-2').html('') //this is to prevent accidental form-2 staying loaded if offer certain code is applied

  if ($('#invite-select').val().toUpperCase()=="F&F") {
    $('#form-1').load("form-1.html"); 
    $('#form-2').load("form-2.html");
    $('#form-3').load("form-3.html");
    $('#price').html("<span class='striked'>$1,525 USD</span><br>$750 USD");
  }

  else if ($('#invite-select').val().toUpperCase()=="PULLUPACHAIR") {
    $('#form-1').load("form-1.html"); 
    $('#form-2').load("form-2.html");
    $('#form-3').load("form-3.html");
    $('#price').html("<span class='striked'>$1,525 USD</span><br>$1,250 USD");
  }

  else if ($('#invite-select').val().toUpperCase()=="WELCOMEHOME") {
    $('#form-1').load("form-1.html"); 
    $('#form-3').load("form-3.html");
    $('#price').html("<span class='striked'>$1,525 USD</span><br>$750 USD");
  }

  else if ($('#invite-select').val().toUpperCase()=="FRIENDOFTHEHOUSE") {
    $('#form-1').load("form-1.html"); 
    $('#form-3').load("form-3.html");
    $('#price').html("<span class='striked'>$1,525 USD</span><br>$1,250 USD");
  }

  else {
    $('#form-1').load("form-1.html"); 
    $('#form-2').load("form-2.html");
    $('#form-3').load("form-3.html");
    $('#price').html("$1,525 USD");
  }

  $('#submit-form-button').show();

  $('html, body').animate({
    scrollTop: $("form").offset().top
  }, 1000);
})

// form onsubmit
// $('#SFB-button').click(function() {
//   var values = {};
//   $.each($('form').serializeArray(), function(i, field) {
//       values[field.name] = field.value;
//   });
//   console.log(JSON.stringify(values))
//   return false
// });


// google sheets api

// Client ID and API key from the Developer Console
// var CLIENT_ID = '590936402413-hr4uj4vasgeirpc507ehr3s4k3nchh9b.apps.googleusercontent.com';
var CLIENT_ID = '590936402413-rb20t115uvqn90tai3174gh6pp4ncc0t.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
  }).then(function () {
    console.log('...')
  });
}



function appendSheet(array) {
  var params = {
    // The ID of the spreadsheet to update.
    spreadsheetId: '1fAzeTEEdhvs1r18Gd3EI-G1lNmSmE_yRfKktnQ8aveY',

    // The A1 notation of a range to search for a logical table of data.
    // Values will be appended after the last row of the table.
    range: 'FORM!A:A',

    // How the input data should be interpreted.
    valueInputOption: "USER_ENTERED",

    // How the input data should be inserted.
    insertDataOption: 'INSERT_ROWS',
  };

  var valueRangeBody = {
    "majorDimension": "ROWS",
    "values":[array]
  };

  var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  request.then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
}

$('#SFB-button').click(function() {

  if ($('[name="firstName"]').val()=='' || $('[name="lastName"]').val()=='' || $('[name="dateOfBirthMonth"]').val()=='' || $('[name="dateOfBirthDay"]').val()=='' || $('[name="dateOfBirthYear"]').val()=='' || $('[name="mailingAddressStreet"]').val()=='' || $('[name="mailingAddressCity"]').val()=='' || $('[name="mailingAddressState"]').val()=='' || $('[name="mailingAddressCountry"]').val()=='' || $('[name="phone"]').val()=='' || $('[name="email1"]').val()=='' || $('[name="email2"]').val()=='' || $('[name="companyEmployer"]').val()=='' || $('[name="companyTitle"]').val()=='' || $('[name="spouseFirstName"]').val()=='' || $('[name="spouseLastName"]').val()=='' || $('[name="spouseDateOfBirthMonth"]').val()=='' || $('[name="spouseDateOfBirthDay"]').val()=='' || $('[name="spouseDateOfBirthYear"]').val()=='' || $('[name="anniversaryMonth"]').val()=='' || $('[name="anniversaryDay"]').val()=='' || $('[name="anniversaryYear"]').val()=='') {
    $('#alert-message-1').show();
    $('html, body').animate({
      scrollTop: $("#alert-message-1").offset().top
    },  1000);
  }
  else if ($('[name="email1"]').val()!=$('[name="email2"]').val() ) {
    $('#alert-message-2').show()
    $('html, body').animate({
      scrollTop: $("#alert-message-2").offset().top
    },  1000);
  }
  else {

    done=false

    var values = [$('#invite-select').val(), 
    $('[name="firstName"]').val(),
    $('[name="lastName"]').val(),
    $('[name="dateOfBirthMonth"]').val() + "/" + $('[name="dateOfBirthDay"]').val() + "/" + $('[name="dateOfBirthYear"]').val(),
    $('[name="mailingAddressStreet"]').val() + ", " + $('[name="mailingAddressCity"]').val() + ", " + $('[name="mailingAddressState"]').val() + " " + $('[name="mailingAddressZip"]').val()  + ", " + $('[name="mailingAddressCountry"]').val(),
    $('[name="phone"]').val(),
    $('[name="email1"]').val(),
    " ",
    $('[name="companyEmployer"]').val(),
    $('[name="companyTitle"]').val(),
    " ",
    $('[name="spouseFirstName"]').val(),
    $('[name="spouseLastName"]').val(),
    $('[name="spouseDateOfBirthMonth"]').val(),
    $('[name="spouseDateOfBirthMonth"]').val() + "/" + $('[name="spouseDateOfBirthDay"]').val() + "/" + $('[name="spouseDateOfBirthYear"]').val(),
    $('[name="anniversaryMonth"]').val() + "/" + $('[name="anniversaryDay"]').val() + "/" + $('[name="anniversaryYear"]').val(),
    " ",
    $('[name="noProposer"]').is(':checked'),
    $('[name="restaurantProposerName"]').val(),
    $('[name="restaurantProposerTitle"]').val(),
    $('[name="restaurantProposerEmail"]').val(),
    $('[name="currentMemberProposer"]').val(),
    " ",
    $('[name="dietaryRestrictions"]').val(),
    // $('[name="whereSit"]').val(),
    $('[name="serviceStyle"]').val(),
    " ",
    $('[name="nycPicks1"]').val() +' '+ $('[name="nycPicks2"]').val() +', '+ $('[name="nycPicks3"]').val(),
    $('[name="nycWhy1"]').val() +' '+ $('[name="nycWhy2"]').val() +', '+ $('[name="nycWhy3"]').val(),
    " ",
    $('[name="locals1"]').val() +' '+ $('[name="locals2"]').val() +', '+ $('[name="locals3"]').val(),
    $('[name="localsWhy1"]').val() +' '+ $('[name="localsWhy2"]').val() +', '+ $('[name="localsWhy3"]').val(),
    "hfdj"
    ];
    // var $inputs = $('form :input');
    // $inputs.each(function() {
    //   values.push($(this).val());
    // });

    console.log(values)
    console.log(values[0])
    appendSheet(values);

    // setTimeout(doSomething, 100);

    // function doSomething() {
    //   if (values[1]!="") {
    //     console.log(values[0])
    //     appendSheet(values);
    //     // window.location = 'https://leopci.github.io/INHOUSE/membership.html'
    //   };
    // }

    // appendSheet(["values",'aaa']);
    return false
  }
});