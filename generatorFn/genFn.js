// Generate Function generates three
// different numbers in three calls
function* fun() {
  yield 10;
  yield 20;
  yield 30;
}

// Calling the Generate Function
let gen = fun();
console.log(gen.next().value); //10
console.log(gen.next().value); // 20
console.log(gen.next().value); //30

const arr = ["a", "b", "c"];

function* generator() {
  yield 1;
  yield* arr;
  yield 2;
}

for (let value of generator()) {
  console.log(value);
}
/*output:
1
a
b
c
2 */
