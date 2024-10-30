"use strict";

function calculateAreaOfCircle(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  console.log(`The area of the circle is ${area.toFixed(2)}`);
}

calculateAreaOfCircle(7);
