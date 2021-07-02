function showNameAndEmail() {
  auth.onAuthStateChanged(function (user) {
    if (user) {

      db.collection("users").doc(user.uid).get().then(function (doc) {
        let name = doc.data().name;
        $("#studentname").text(name);
        $("#studentnameprofile").text(name);
      })

      db.collection("users").doc(user.uid).get().then(function (doc) {
        let email = doc.data().email;
        $("#studentemail").text(email);
      })
    } else {
      // window.location.assign("login.html");
    }
  });
}
showNameAndEmail();