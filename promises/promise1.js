const GITHUB_USER = "https://api.github.com/users/prakashprabhukota";
const myPromise = fetch(GITHUB_USER); //myPromise is our promise object
console.log(typeof myPromise); //object
console.log(myPromise);

//Now attach a callback function to promise object

myPromise.then((response) =>
  console.log(`Response received is: ${response.status}`)
);
