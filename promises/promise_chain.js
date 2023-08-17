const arr_cart = ["laptop", "shoe", "trousers"];
console.log(arr_cart);

// 1. createOrder
// 2. proceedToPayment
// 3. showOrderSummary
// 4. updateWallet

//const promise = createOrder(arr_cart);
//promise.then
createOrder(arr_cart)
  .then(function (orderId) {
    console.log("Order is confirmed: ", orderId);
    return orderId; // Return data to the chain
  })
  .catch(function (error) {
    // Catch the error in respective promise 'then' block
    console.log(error.message);
  })
  .then(function (orderId) {
    // Invoke the next promise in chain
    return paymentStatus(orderId);
    // returning this is imp, which is like api.then (attaching)
  })
  .then(function (paystatus) {
    // Consumer of 'paymentStatus' promise
    console.log(paystatus);
  })
  .then(function () {
    return showOrderSummary();
  })
  .then(function (summary) {
    console.log(summary);
  })
  .then(function () {
    return updateWallet();
  })
  .then(function (wallet) {
    console.log(wallet);
  });
// Producer
function createOrder(cart) {
  //Create promise
  // Note: resolve and reject happens only once
  const pr = new Promise((resolve, reject) => {
    if (validateCart(cart)) {
      const orderId = "OD61353";
      resolve(orderId);
    } else {
      const validateErr = new Error("Cart value must be > 500 Rs");
      reject(validateErr);
    }
  });
  return pr;
}
function validateCart(cart) {
  return true;
}
function paymentStatus(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}
function showOrderSummary() {
  return new Promise(function (resolve, reject) {
    resolve("Order Summary: You have placed 3 orders");
  });
}
function updateWallet() {
  return new Promise(function (resolve, reject) {
    resolve("Wallet has been updated");
  });
}
