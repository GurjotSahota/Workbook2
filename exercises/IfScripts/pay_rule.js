"use strict";

function calculateGrossPay(payRate, hoursWorked) {
  let regularHours = 40;
  let overtimeRate = 1.5;
  let grossPay;

  if (hoursWorked > regularHours) {
    // Calculate overtime pay
    let overtimeHours = hoursWorked - regularHours;
    grossPay = regularHours * payRate + overtimeHours * payRate * overtimeRate;
  } else {
    // No overtime, regular pay
    grossPay = hoursWorked * payRate;
  }

  console.log(
    `For a pay rate of $${payRate} and ${hoursWorked} hours worked, the gross pay is $${grossPay.toFixed(2)}`
  );
}

calculateGrossPay(12.5, 20);
calculateGrossPay(25.0, 40);
calculateGrossPay(17.3, 45);
