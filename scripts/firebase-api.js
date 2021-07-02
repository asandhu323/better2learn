  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDvGi5YDwkfYv_qoPfyAvaiUhb_GTbja48",
    authDomain: "better2learn-bcc78.firebaseapp.com",
    projectId: "better2learn-bcc78",
    storageBucket: "better2learn-bcc78.appspot.com",
    messagingSenderId: "1005921655923",
    appId: "1:1005921655923:web:80470a7fd75f07360e1e06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();