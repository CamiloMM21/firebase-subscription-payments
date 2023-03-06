const firebaseConfig = {
    apiKey: "AIzaSyAyzMBF7NHLcCzOQLL9BUlDfroj5S5GiL4",
    authDomain: "mailyr-b6f95.firebaseapp.com",
    databaseURL: "https://mailyr-b6f95-default-rtdb.firebaseio.com",
    projectId: "stripe-subs-ext",
  
    projectId: 'stripe-subs-ext',
    storageBucket: "mailyr-b6f95.appspot.com",
    messagingSenderId: "382896679460",
    appId: "1:382896679460:web:1544ccb81e970622ebc6b1",
  };
  
  const functionLocation = "us-east1";
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
  const firebaseUiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        return true;
      },
      uiShown: () => {
        document.querySelector("#loader").style.display = "none";
      },
    },
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // Your terms of service url.
    tosUrl: "https://example.com/terms",
    // Your privacy policy url.
    privacyPolicyUrl: "https://example.com/privacy",
  };
  