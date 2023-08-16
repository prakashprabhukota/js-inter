// console.log(myName);
// let y = 22;
// const myName = "Mahesh";
// var x = 10;

// function abc() {
//   var aa = "Prk";
//   console.log(aa);
//   function def() {
//     var aab = "Prb";
//     console.log(aab);
//   }
//   def();
// }
// abc();

var a = 10;
let b = 20;

{
  var a = 90;
  let b = 100;
  console.log("From block scope: ", a, b);
}
function myFn() {
  var a = 33;
  let b = 43;
  console.log("From function scope: ", a, b);
}
console.log("From global scope: ", a, b);
myFn();
