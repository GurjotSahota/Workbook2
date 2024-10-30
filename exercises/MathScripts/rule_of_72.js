"use strict";

function calculateDoublingTime(interestRate, initialBalance) {
  // Rule of 72 calculation
  let yearsToDouble = 72 / interestRate;
  let doubledBalance = initialBalance * 2;

  // Format the output to 2 decimal places for balance and 1 decimal place for years
  console.log(
    `At a ${interestRate}% interest rate, your savings account will be worth $${doubledBalance.toFixed(
      2
    )} in ${yearsToDouble.toFixed(1)} years`
  );
}

calculateDoublingTime(6, 1000);
