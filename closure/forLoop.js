// function displayNum() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

//With Var using closure technique
function displayNum() {
  for (var i = 1; i <= 10; i++) {
    function close(index) {
      setTimeout(() => {
        console.log(index);
      }, i * 1000);
    }
    close(i);
  }
}

displayNum();
