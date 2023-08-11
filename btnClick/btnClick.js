const btnClick = document.getElementById("btnClick");
const eleDisplay = document.getElementById("display");

function counter() {
  let counter = 0;
  btnClick.addEventListener("click", () => {
    counter++;
    eleDisplay.innerText = `Clicked ${counter} times`;
  });
}

counter();
