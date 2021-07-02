const logout = document.getElementById('logout');

// Restrict users from navigating without authentication.
auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log(user.uid);
  } else {
    location.assign('login.html');
  }
});

// Log out function
function quit() {
  logout.addEventListener('click', (e) => {

    console.log("logging out user");
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      location.assign("index.html");
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  });
};
quit();