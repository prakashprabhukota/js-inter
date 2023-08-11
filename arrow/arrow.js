const myObject = {
  fullname: "John Doe",
  sayName: () => {
    return `My name is ${this.fullname}`;
  },
};

console.log(myObject.sayName());
//Output: undefined since arrow functions inherit their scope
//from the parent function, in this case, the window or the global object, rather than binding the function themselves.
