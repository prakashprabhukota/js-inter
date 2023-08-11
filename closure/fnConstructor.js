function CountMe() {
  let count = 0;
  console.log(`Count value: ${count}`);
  this.incrementCount = () => {
    count++;
    console.log(`After increment: ${count}`);
  };
  this.decrementCount = () => {
    count--;
    console.log(`After decrement: ${count}`);
  };
}

const counter1 = new CountMe();
let i = 0;
while (i < 5) {
  counter1.incrementCount();
  i++;
}
counter1.decrementCount();
