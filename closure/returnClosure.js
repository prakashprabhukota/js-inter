function outerFn() {
  const myName = "Mahesh";
  return function innerFn() {
    console.log(`Name is: ${myName}`);
  };
}

const preserveName = outerFn();
preserveName();
// Closure also leads to more memory consumption,
//Ex: Here variable 'myName' doesn't get GC
