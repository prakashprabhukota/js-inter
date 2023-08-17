const isAuthenticated = (user) => user.loggedIn;
const login = (user) => {
  /* perform login logic */
  console.log("Loging successfull")
};
const redirect = (url) => {
  /* redirect to URL */
  console.log("You have been redirected to dashbaord")
};

const authenticate = (user, url) => {
  if (!isAuthenticated(user)) {
    login(user);
  }
  redirect(url);
};

// Usage
authenticate({ loggedIn: false }, "/dashboard");
