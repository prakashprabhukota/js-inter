function x() {
  var name = "Prakash";
  y();
  function y() {
    console.log("Name from closure: ", name);
  }
}

x();
