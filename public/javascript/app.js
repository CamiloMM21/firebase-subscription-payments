const prices = {};

// Replace with your Firebase project config.
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

// Replace with your cloud functions location
<<<<<<< HEAD
const functionLocation = "us-east1";
=======
const functionLocation = 'us-east1';
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

/**
 * Firebase Authentication configuration
 */
const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
const firebaseUiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: () => {
<<<<<<< HEAD
      document.querySelector("#loader").style.display = "none";
    },
  },
  signInFlow: "popup",
  signInSuccessUrl: "/",
=======
      document.querySelector('#loader').style.display = 'none';
    },
  },
  signInFlow: 'popup',
  signInSuccessUrl: '/',
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Your terms of service url.
<<<<<<< HEAD
  tosUrl: "https://example.com/terms",
  // Your privacy policy url.
  privacyPolicyUrl: "https://example.com/privacy",
};
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("main").style.display = "block";
    currentUser = firebaseUser.uid;
    startDataListeners();
  } else {
    document.querySelector("main").style.display = "none";
    firebaseUI.start("#firebaseui-auth-container", firebaseUiConfig);
=======
  tosUrl: 'https://example.com/terms',
  // Your privacy policy url.
  privacyPolicyUrl: 'https://example.com/privacy',
};
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    document.querySelector('#loader').style.display = 'none';
    document.querySelector('main').style.display = 'block';
    currentUser = firebaseUser.uid;
    startDataListeners();
  } else {
    document.querySelector('main').style.display = 'none';
    firebaseUI.start('#firebaseui-auth-container', firebaseUiConfig);
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
  }
});

/**
 * Data listeners
 */
function startDataListeners() {
  // Get all our products and render them to the page
<<<<<<< HEAD
  const products = document.querySelector(".products");
  const template = document.querySelector("#product");
  db.collection("products")
    .where("active", "==", true)
=======
  const products = document.querySelector('.products');
  const template = document.querySelector('#product');
  db.collection('products')
    .where('active', '==', true)
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(async function (doc) {
        const priceSnap = await doc.ref
<<<<<<< HEAD
          .collection("prices")
          .where("active", "==", true)
          .orderBy("unit_amount")
          .get();
        if (!"content" in document.createElement("template")) {
          console.error("Your browser doesn’t support HTML template elements.");
=======
          .collection('prices')
          .where('active', '==', true)
          .orderBy('unit_amount')
          .get();
        if (!'content' in document.createElement('template')) {
          console.error('Your browser doesn’t support HTML template elements.');
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
          return;
        }

        const product = doc.data();
        const container = template.content.cloneNode(true);

<<<<<<< HEAD
        container.querySelector("h2").innerText = product.name.toUpperCase();
        container.querySelector(".description").innerText =
          product.description?.toUpperCase() || "";
=======
        container.querySelector('h2').innerText = product.name.toUpperCase();
        container.querySelector('.description').innerText =
          product.description?.toUpperCase() || '';
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
        // Prices dropdown
        priceSnap.docs.forEach((doc) => {
          const priceId = doc.id;
          const priceData = doc.data();
          prices[priceId] = priceData;
          const content = document.createTextNode(
<<<<<<< HEAD
            `${new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: priceData.currency,
            }).format((priceData.unit_amount / 100).toFixed(2))} per ${
              priceData.interval ?? "once"
            }`
          );
          const option = document.createElement("option");
          option.value = priceId;
          option.appendChild(content);
          container.querySelector("#price").appendChild(option);
        });

        if (product.images.length) {
          const img = container.querySelector("img");
=======
            `${new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: priceData.currency,
            }).format((priceData.unit_amount / 100).toFixed(2))} per ${
              priceData.interval ?? 'once'
            }`
          );
          const option = document.createElement('option');
          option.value = priceId;
          option.appendChild(content);
          container.querySelector('#price').appendChild(option);
        });

        if (product.images.length) {
          const img = container.querySelector('img');
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
          img.src = product.images[0];
          img.alt = product.name;
        }

<<<<<<< HEAD
        const form = container.querySelector("form");
        form.addEventListener("submit", subscribe);
=======
        const form = container.querySelector('form');
        form.addEventListener('submit', subscribe);
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7

        products.appendChild(container);
      });
    });
  // Get all subscriptions for the customer
<<<<<<< HEAD
  db.collection("customers")
    .doc(currentUser)
    .collection("subscriptions")
    .where("status", "in", ["trialing", "active"])
    .onSnapshot(async (snapshot) => {
      if (snapshot.empty) {
        // Show products
        document.querySelector("#subscribe").style.display = "block";
        return;
      }
      document.querySelector("#subscribe").style.display = "none";
      document.querySelector("#my-subscription").style.display = "block";
=======
  db.collection('customers')
    .doc(currentUser)
    .collection('subscriptions')
    .where('status', 'in', ['trialing', 'active'])
    .onSnapshot(async (snapshot) => {
      if (snapshot.empty) {
        // Show products
        document.querySelector('#subscribe').style.display = 'block';
        return;
      }
      document.querySelector('#subscribe').style.display = 'none';
      document.querySelector('#my-subscription').style.display = 'block';
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
      // In this implementation we only expect one Subscription to exist
      const subscription = snapshot.docs[0].data();
      const priceData = (await subscription.price.get()).data();
      document.querySelector(
<<<<<<< HEAD
        "#my-subscription p"
      ).textContent = `You are paying ${new Intl.NumberFormat("en-US", {
        style: "currency",
=======
        '#my-subscription p'
      ).textContent = `You are paying ${new Intl.NumberFormat('en-US', {
        style: 'currency',
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
        currency: priceData.currency,
      }).format((priceData.unit_amount / 100).toFixed(2))} per ${
        priceData.interval
      }, giving you the role: ${await getCustomClaimRole()}. 🥳`;
    });
}

/**
 * Event listeners
 */

// Signout button
document
<<<<<<< HEAD
  .getElementById("signout")
  .addEventListener("click", () => firebase.auth().signOut());
=======
  .getElementById('signout')
  .addEventListener('click', () => firebase.auth().signOut());
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7

// Checkout handler
async function subscribe(event) {
  event.preventDefault();
<<<<<<< HEAD
  document.querySelectorAll("button").forEach((b) => (b.disabled = true));
  const formData = new FormData(event.target);
  const selectedPrice = {
    price: formData.get("price"),
  };
  // For prices with metered billing we need to omit the quantity parameter.
  // For all other prices we set quantity to 1.
  if (prices[selectedPrice.price]?.recurring?.usage_type !== "metered")
=======
  document.querySelectorAll('button').forEach((b) => (b.disabled = true));
  const formData = new FormData(event.target);
  const selectedPrice = {
    price: formData.get('price'),
  };
  // For prices with metered billing we need to omit the quantity parameter.
  // For all other prices we set quantity to 1.
  if (prices[selectedPrice.price]?.recurring?.usage_type !== 'metered')
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
    selectedPrice.quantity = 1;
  const checkoutSession = {
    automatic_tax: true,
    tax_id_collection: true,
    collect_shipping_address: true,
    allow_promotion_codes: true,
    line_items: [selectedPrice],
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    metadata: {
<<<<<<< HEAD
      key: "value",
    },
  };
  // For one time payments set mode to payment.
  if (prices[selectedPrice.price]?.type === "one_time") {
    checkoutSession.mode = "payment";
    checkoutSession.payment_method_types = ["card", "sepa_debit", "sofort"];
  }

  const docRef = await db
    .collection("customers")
    .doc(currentUser)
    .collection("checkout_sessions")
=======
      key: 'value',
    },
  };
  // For one time payments set mode to payment.
  if (prices[selectedPrice.price]?.type === 'one_time') {
    checkoutSession.mode = 'payment';
    checkoutSession.payment_method_types = ['card', 'sepa_debit', 'sofort'];
  }

  const docRef = await db
    .collection('customers')
    .doc(currentUser)
    .collection('checkout_sessions')
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
    .add(checkoutSession);
  // Wait for the CheckoutSession to get attached by the extension
  docRef.onSnapshot((snap) => {
    const { error, url } = snap.data();
    if (error) {
      // Show an error to your customer and then inspect your function logs.
      alert(`An error occured: ${error.message}`);
<<<<<<< HEAD
      document.querySelectorAll("button").forEach((b) => (b.disabled = false));
=======
      document.querySelectorAll('button').forEach((b) => (b.disabled = false));
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
    }
    if (url) {
      window.location.assign(url);
    }
  });
}

// Billing portal handler
document
<<<<<<< HEAD
  .querySelector("#billing-portal-button")
  .addEventListener("click", async (event) => {
    document.querySelectorAll("button").forEach((b) => (b.disabled = true));
=======
  .querySelector('#billing-portal-button')
  .addEventListener('click', async (event) => {
    document.querySelectorAll('button').forEach((b) => (b.disabled = true));
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7

    // Call billing portal function
    const functionRef = firebase
      .app()
      .functions(functionLocation)
<<<<<<< HEAD
      .httpsCallable("ext-firestore-stripe-subscriptions-createPortalLink");
=======
      .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
>>>>>>> 89e11f2a9d8575439a9128c0b9e0b451204a51e7
    const { data } = await functionRef({ returnUrl: window.location.origin });
    window.location.assign(data.url);
  });

// Get custom claim role helper
async function getCustomClaimRole() {
  await firebase.auth().currentUser.getIdToken(true);
  const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
  return decodedToken.claims.stripeRole;
}
