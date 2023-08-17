//Function composition to create a new function that first adds 1 to the input,
//then doubles the result, and finally subtracts three

function addOne(num) {
  return (num += 1);
}

function double(num) {
  return num * 2;
}

function subThree(num) {
  return (num -= 3);
}

const composedFn = subThree(double(addOne(5)));
console.log(composedFn);
