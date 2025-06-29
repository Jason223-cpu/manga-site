
const firebaseConfig = {
  apiKey: "AIzaSyBBEaVoYiXPu5HcAEvaIEoPcZqAfGF7kDk",
  authDomain: "manga-website-a7e31.firebaseapp.com",
  projectId: "manga-website-a7e31",
  storageBucket: "manga-website-a7e31.firebasestorage.app",
  messagingSenderId: "616010940352",
  appId: "1:616010940352:web:d51ece7e394b9890889225"
};

// 🔌 Connect to Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// 👤 Login Function (for login.html)
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText =
        "✅ Login success! Your ID: " + userCredential.user.uid;
    })
    .catch((error) => {
      document.getElementById("status").innerText = error.message;
    });
}

// 🆕 Register Function
function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText =
        "✅ Registered! Your ID: " + userCredential.user.uid;
    })
    .catch((error) => {
      document.getElementById("status").innerText = error.message;
    });
}

// ⭐ Admin: Add VIP User
function addVIP() {
  const uid = document.getElementById("uid").value;
  const expires = document.getElementById("expires").value;

  db.collection("vip_users").doc(uid).set({
    vip: true,
    expires: expires
  }).then(() => {
    document.getElementById("status").innerText = "✅ VIP added!";
  }).catch((error) => {
    document.getElementById("status").innerText = error.message;
  });
}
