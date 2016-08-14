$(document).ready(function() {
//console.log( "ready!" );


//Checking Deposit
$('#depositChecking').on('click', function(){
  var input = parseInt($('#inputChecking').val());
  var currentBalance = parseInt($('#checkingBalance').text());
  var newBalance = (currentBalance + input);
  $('#checkingBalance').text(newBalance);
  $('#inputChecking').val('');
});

//Checking Withdrawl
$('#withdrawChecking').on('click', function(){
  var input = parseInt($('#inputChecking').val());
  var currentBalance = parseInt($('#checkingBalance').text());
  var newBalance = (currentBalance - input);
  $('#checkingBalance').text(newBalance);
  $('#inputChecking').val('');
  if(newBalance < 0) {
    $('#checkingBalance').text(currentBalance);
    alert('Warning: Insufficient Funds')
  }
  if (newBalance === 0) {
    $('.checking').addClass('zero');
  }
  if (newBalance > 0) {
    $('.checking').removeClass('zero').addClass('balance');
  }
});

//Savings Deposit
$('#depositSavings').on('click', function(){
  var input = parseInt($('#inputSavings').val());
  var currentBalance = parseInt($('#savingsBalance').text());
  var newBalance = (currentBalance + input);
  $('#savingsBalance').text(newBalance)
  $('#inputSavings').val('');
});

//Savings account withdraw funtion
$('#withdrawSavings').on('click', function(){
  var input = parseInt($('#inputSavings').val());
  var currentBalance = parseInt($('#savingsBalance').text());
  var newBalance = (currentBalance - input);
  $('#savingsBalance').text(newBalance);
  $('#inputSavings').val('');
  if(newBalance < 0) {
    $('#savingsBalance').text(currentBalance);
    alert('Warning: Insufficient Funds')
  }
  if (newBalance === 0) {
    $('.savings').addClass('zero');
  }
  if (newBalance > 0) {
    $('.savings').removeClass('zero').addClass('balance');
  }
});

//DOCUMENT READY BRACES!
});



// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
