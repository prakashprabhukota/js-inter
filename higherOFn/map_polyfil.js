// Find area - circumference - diameter of circle
// given radius.
// Usage of higer order function in JS

const arr_radius = [3, 1, 2, 4];

function fnArea(radius) {
  // Formula: PI * r * r
  return Math.PI * radius * radius;
}
function fnCircumference(radius) {
  // 2 * PI * r
  return 2 * Math.PI * radius;
}

const fnCalculate = function (arrRad, fnLogic) {
  const arr_output = [];
  for (let i = 0; i < arrRad.length; i++) {
    arr_output.push(fnLogic(arrRad[i]));
  }
  return arr_output;
};

console.log(fnCalculate(arr_radius, fnArea));
console.log("USING MAP:", arr_radius.map(fnArea));
//console.log(fnCalculate(arr_radius, fnCircumference))

//Below we can make our own map function by adding
//our function to array prototype
//(creating polyfil for map function)

Array.prototype.myCalci = function (fnLogic) {
  const arr_output = [];
  for (let i = 0; i < this.length; i++) {
    arr_output.push(fnLogic(this[i]));
  }
  return arr_output;
};
console.log("USING POLYFIL FOR MAP:", arr_radius.myCalci(fnCircumference));
