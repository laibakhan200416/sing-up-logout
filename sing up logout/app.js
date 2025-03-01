
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from
"https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA9DflejB2IwwVIO1IHM_Tev8NT28tQgWM",
    authDomain: "sing-up-login-8176b.firebaseapp.com",
    projectId: "sing-up-login-8176b",
    storageBucket: "sing-up-login-8176b.firebasestorage.app",
    messagingSenderId: "983341131421",
    appId: "1:983341131421:web:7310d12ae766dfc3de1674",
    measurementId: "G-6K1MWD996K"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let auth = getAuth(app);

document.getElementById("signupBtn")?.addEventListener("click", (e) => {  
  e.preventDefault();
const email = document.getElementById("email").value;   
const password = document.getElementById("password").value; 

createUserWithEmailAndPassword(auth, email, password) 
.then(() => {    
alert("Signup Successful");  
window.location.href = "welcom.html";  
}) 
.catch(error => document.getElementById("message").innerText = error.message);
})
document.getElementById("loginBtn")?.addEventListener("click", () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
signInWithEmailAndPassword(auth, email, password)
.then(() => {
alert("Login Successful");
window.location.href = "welcom.html";        
})         
.catch(error => document.getElementById("message").innerText = error.message);
}); 
export function logout() {
signOut(auth)         
.then(() => {             
  alert("Logged out");             
  window.location.href = "index.html";        
})         
.catch(error => console.error("Logout Error:", error));
} document.getElementById("logoutBtn")?.addEventListener("click", logout)