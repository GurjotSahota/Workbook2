"use strict";

function calculateTipAmount(billAmount, tipPercentage) {
  let tipAmount = billAmount * (tipPercentage / 100);
  console.log(`The tip on a $${billAmount} food bill is $${tipAmount.toFixed(2)}`);
}

calculateTipAmount(100, 15);
