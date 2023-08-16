arr_num = [5, 3, 2, 6, 9, 7, 20];

// using map to transform the array

//double the array numbers using MAP
const arr_Double = arr_num.map(
  //Higher order fn
  function fnDoub(item) {
    //Callback function
    return item * 2;
  }
);
console.log(`Doubled array using MAP ${arr_Double}`);

// Filter the odd values
const arr_Filter = arr_num.filter((item) => item % 2);
console.log(`Filtered odd values using FILTER ${arr_Filter}`);

// Find sum of array items using REDUCE
//Reduce takes 2 args: 1. CB function, 2. Initiale value for
// The accumalator which is inside the CB function argument
const _sum = arr_num.reduce(function (acc_sum, curr_item) {
  return (acc_sum += curr_item);
}, 0);
console.log(`Sum of array items using REDUCE ${_sum}`);

// Find Max num in array using REDUCE
const _max = arr_num.reduce((acc_Max, curr_item) => {
  if (curr_item > acc_Max) {
    acc_Max = curr_item;
  }
  return acc_Max;
}, 0);

console.log("Found the Max num in array using REDUCE: ", _max);
