// Initialize the FirebaseUI Widget using Firebase.

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      //------------------------------------------------------------------------------------------
      // The code below is modified from default snippet provided by the FB documentation.
      //
      // If the user is a "brand new" user, then create a new "user" in your own database.
      // Assign this user with the name and email provided.
      // Before this works, you must enable "Firestore" from the firebase console.
      // The Firestore rules must allow the user to write.
      //------------------------------------------------------------------------------------------
      var user = authResult.user;
      if (authResult.additionalUserInfo.isNewUser) { //if new user
        db.collection("users").doc(user.uid).set({ //write to firestore
          name: user.displayName, //"users" collection
          email: user.email //with authenticated user's ID (user.uid)
        })
        //also if new user, create collection to store all grades for all courses for gradebook
        //very sorry for the hideously long function
        db.collection("grades").doc(user.uid).set({
          c1100j1: null,
          c1100j1s: 1,
          c1100j2: null,
          c1100j2s: 1,
          c1100j3: null,
          c1100j3s: 1,
          c1100j4: null,
          c1100j4s: 1,
          c1100j5: null,
          c1100j5s: 1,
          c1100j8: null,
          c1100j8s: 1,
          c1100j9: null,
          c1100j9s: 1,
          c1100j11: null,
          c1100j11s: 1,
          c1100j12: null,
          c1100j12s: 1,

          c1113q1: null,
          c1113q1s: 23,
          c1113q2: null,
          c1113q2s: 20,
          c1113q3: null,
          c1113q3s: 18,
          c1113q4: null,
          c1113q4s: 13,
          c1113q5: null,
          c1113q5s: 20,
          c1113q6: null,
          c1113q6s: 10,
          c1113a1: null,
          c1113a1s: 21,
          c1113a2: null,
          c1113a2s: 36,
          c1113a3: null,
          c1113a3s: 34,
          c1113a4: null,
          c1113a4s: 27,
          c1113a5: null,
          c1113a5s: 27,
          c1113a6: null,
          c1113a6s: 26,
          c1113a7: null,
          c1113a7s: 27,
          c1113a8: null,
          c1113a8s: 15,
          c1113a9: null,
          c1113a9s: 20,
          c1113e1: null,
          c1113e1s: 27,
          c1113e2: null,
          c1113e2s: 30,

          c1116q1: null,
          c1116q1s: 24,
          c1116q2: null,
          c1116q2s: 24,
          c1116q3: null,
          c1116q3s: 23,
          c1116q4: null,
          c1116q4s: 24,
          c1116q5: null,
          c1116q5s: 24,
          c1116q6: null,
          c1116q6s: 22,
          c1116q7: null,
          c1116q7s: 27,
          c1116d1: null,
          c1116d1s: 5,
          c1116d2: null,
          c1116d2s: 5,
          c1116d3: null,
          c1116d3s: 5,
          c1116d4: null,
          c1116d4s: 5,
          c1116d5: null,
          c1116d5s: 5,
          c1116d6: null,
          c1116d6s: 5,
          c1116d7: null,
          c1116d7s: 5,
          c1116e: null,
          c1116es: 100,
          c1116ir: null,
          c1116irs: 100,
          c1116op: null,
          c1116ops: 20,

          c1510q1: null,
          c1510q1s: 5,
          c1510q2: null,
          c1510q2s: 5,
          c1510q3: null,
          c1510q3s: 5,
          c1510q4: null,
          c1510q4s: 5,
          c1510q5: null,
          c1510q5s: 5,
          c1510q6: null,
          c1510q6s: 5,
          c1510q7: null,
          c1510q7s: 5,
          c1510q8: null,
          c1510q8s: 5,
          c1510q9: null,
          c1510q9s: 5,
          c1510q10: null,
          c1510q10s: 5,
          c1510q11: null,
          c1510q11s: 5,
          c1510l1: null,
          c1510l1s: 5,
          c1510l2: null,
          c1510l2s: 5,
          c1510l3: null,
          c1510l3s: 5,
          c1510l4: null,
          c1510l4s: 5,
          c1510l5: null,
          c1510l5s: 5,
          c1510l6: null,
          c1510l6s: 5,
          c1510l7: null,
          c1510l7s: 5,
          c1510l8: null,
          c1510l8s: 5,
          c1510l9: null,
          c1510l9s: 5,
          c1510l10: null,
          c1510l10s: 5,
          c1510l11: null,
          c1510l11s: 5,
          c1510a1: null,
          c1510a1s: 50,
          c1510a2: null,
          c1510a2s: 50,
          c1510a3: null,
          c1510a3s: 40,
          c1510a4: null,
          c1510a4s: 30,
          c1510e1: null,
          c1510e1s: 70,
          c1510e2: null,
          c1510e2s: 70,

          c1537l1: null,
          c1537l1s: 5,
          c1537l2: null,
          c1537l2s: 5,
          c1537l3: null,
          c1537l3s: 5,
          c1537l4: null,
          c1537l4s: 5,
          c1537l5: null,
          c1537l5s: 5,
          c1537l6: null,
          c1537l6s: 5,
          c1537l7: null,
          c1537l7s: 5,
          c1537l8: null,
          c1537l8s: 5,
          c1537l9: null,
          c1537l9s: 5,
          c1537l10: null,
          c1537l10s: 5,
          c1537e1: null,
          c1537e1s: 47,
          c1537e2: null,
          c1537e2s: 50,

          c1712q1: null,
          c1712q1s: 10,
          c1712q2: null,
          c1712q2s: 10,
          c1712q3: null,
          c1712q3s: 10,
          c1712q4: null,
          c1712q4s: 10,
          c1712a1: null,
          c1712a1s: 1,
          c1712a2: null,
          c1712a2s: 1,
          c1712a3: null,
          c1712a3s: 24,
          c1712a4: null,
          c1712a4s: 1,
          c1712a5: null,
          c1712a5s: 12,
          c1712a6: null,
          c1712a6s: 20,
          c1712a7: null,
          c1712a7s: 20,
          c1712a8: null,
          c1712a8s: 10,
          c1712a9: null,
          c1712a9s: 10,
          c1712a10: null,
          c1712a10s: 20,
          c1712e1: null,
          c1712e1s: 45,
          c1712e2: null,
          c1712e2s: 50,

          c1800ia1: null,
          c1800ia1s: 5,
          c1800ia2: null,
          c1800ia2s: 10,
          c1800ia3: null,
          c1800ia3s: 10,
          c1800ia4: null,
          c1800ia4s: 3,
          c1800ia5: null,
          c1800ia5s: 3,
          c1800ia6: null,
          c1800ia6s: 3,
          c1800ia7: null,
          c1800ia7s: 3,
          c1800ta1: null,
          c1800ta1s: 10,
          c1800ta2: null,
          c1800ta2s: 10,
          c1800ta3: null,
          c1800ta3s: 10,
          c1800ta4: null,
          c1800ta4s: 10,
          c1800ta5: null,
          c1800ta5s: 10,
          c1800ta6: null,
          c1800ta6s: 10,
          c1800ta7: null,
          c1800ta7s: 10,
          c1800ta8: null,
          c1800ta8s: 10,
          c1800ta9: null,
          c1800ta9s: 10,
          c1800ta10: null,
          c1800ta10s: 100,
          c1800ala1: null,
          c1800ala1s: 3,
          c1800ala2: null,
          c1800ala2s: 3,
          c1800ala3: null,
          c1800ala3s: 5,
          c1800ala4: null,
          c1800ala4s: 5,
          c1800ala5: null,
          c1800ala5s: 5,
          c1800ala6: null,
          c1800ala6s: 5,
          c1800ala7: null,
          c1800ala7s: 5,
          c1800ala8: null,
          c1800ala8s: 3,
          c1800fp: null,
          c1800fps: 30

        }).then(function () {
          console.log("New user added to firestore and grades collection created.");
          window.location.assign("main.html"); //re-direct to main.html after signup
        }).catch(function (error) {
          console.log("Error adding new user: " + error);
        });

      } else {
        return true;
      }
      return false;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'main.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);