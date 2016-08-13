$(document).ready(function() {
//console.log( "ready!" );


//Checking account deposit function
//On click of the depositChecking button
//Get value from the amountChecking input field
//Take that value and add it to the existing value in the checkingBalance div
var checkingBalance=$('#checkingBalance')
var inputChecking=$('#inputChecking')

$('#depositChecking').on('click', function(){
   var totalCheckingBal = parseInt(checkingBalance.text());
   var addChecking = parseInt(inputChecking.val());
   var newCheckingBal = (totalCheckingBal + addChecking);
   checkingBalance.text(newCheckingBal)
   //inputChecking.reset();

});









//Checking account withdrawl funtion

//On click of the withdrawChecking button

//Get value from the amountChecking input field

// If that value is greater than the value in the account ignore that action
// In other words if this would put the account into a negative balance do not allow it

//Else subtract that value from the current amount in the checking account


//Savings account deposit function

//On click of the depositSavings button

//Get value from the amountSavings input field

//Take that value and add it to the existing value in the savingsBalance div

//Savings account withdraw funtion

//On click of the withdrawl button

//Get value from the amountSavings input field

 //If that value is greater than the value in the account ignore that action
 //In other words if this would put the account into a negative balance do not allow it

 //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts


//DOCUMENT READY BRACES!
});






// $('#depositChecking').on('click', add$$$())
// $('#depositSavings').on('click', add$$$())
// // $('#withdrawChecking').on('click', rmv$$$())
// // $('#withdrawSavings').on('click', rmv$$$())
//
//
// function add$$$(){
//   var prevBalance = $(this).siblings("div.balance");
//   var prevBalNumerical = prevBalance.text();
//   var currentBalance = parseInt(prevBalNumerical.replace("$", ""));
//   var addAmount = parseInt($(this).siblings("input.inputChecking").val());
//
//   $(prevBalance).text(function() {
//     var newBalance = addAmount + currentBalance;
//     return "$" + newbalance;
//   });
// }
