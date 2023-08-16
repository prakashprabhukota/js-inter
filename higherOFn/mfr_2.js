const arr_obj = [
  {
    firstName: "Prakash",
    lastName: "Prabhu",
    age: 29,
  },
  {
    firstName: "Suresh",
    lastName: "Shety",
    age: 35,
  },
  {
    firstName: "Goli",
    lastName: "Gardi",
    age: 29,
  },
];
//Fetch the full name array from each objects of array
const arr_fullName = arr_obj.map((item) => {
  return item.firstName + " " + item.lastName;
});
console.log(arr_fullName);

//Display the count of different age: {29: 2, 35: 2}
const arr_age = arr_obj.reduce((acc_obj, cur_obj) => {
  if (acc_obj[cur_obj.age]) {
    acc_obj[cur_obj.age] += 1;
  } else {
    acc_obj[cur_obj.age] = 1;
  }
  return acc_obj;
}, {});
console.log(arr_age);

// Display the first name of people who's age is < 30
const arr_firstName = arr_obj
  .filter((item_obj) => item_obj.age < 30)
  .map((data) => data.firstName);

console.log(arr_firstName);

// using Reduce
console.log("Using reduce: ");
const output = arr_obj.reduce((arr_Acc, curr_obj) => {
  if (curr_obj.age < 30) {
    arr_Acc.push(curr_obj.firstName);
  }
  return arr_Acc;
}, []);
console.log(output);
