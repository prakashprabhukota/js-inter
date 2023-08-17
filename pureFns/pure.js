//Pure Function
function calculateGST(productPrice) {
  return productPrice * 0.05;
}
console.log(calculateGST(15));

/* The above function will always return the same result if we pass 
the same product price. In other words, its output doesn’t get 
affected by any other values/state changes. 
So we can call the “calculateGST” function a Pure Function. */

// Impure function

let tax = 20;
function calculate(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}
console.log(calculate(15));
/* It is not a pure function as the output is dependent on 
an external variable “tax”. So if the tax value is updated somehow, 
then we will get a different output though we pass the same 
productPrice as a parameter to the function. */
