import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC9P7v4L5CMLgtGgOaPZxXAiiBWPKxfuGg",
  authDomain: "shop-dopi.firebaseapp.com",
  projectId: "shop-dopi",
  storageBucket: "shop-dopi.firebasestorage.app",
  messagingSenderId: "918712768733",
  appId: "1:918712768733:web:3badcfca5770cc7754e334",
  measurementId: "G-XWZN1CC7GB"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const emailField = document.getElementById("user-email");
const uidField = document.getElementById("user-uid");
const lastLoginField = document.getElementById("user-last-login");
const logoutBtn = document.getElementById("logout-btn");

// Kiểm tra trạng thái đăng nhập
onAuthStateChanged(auth, (user) => {
  if (user) {
    emailField.textContent = user.email;
    uidField.textContent = user.uid;
    lastLoginField.textContent = new Date(user.metadata.lastSignInTime).toLocaleString();
  } else {
    window.location.href = "dangnhap.html";
  }
});

// Xử lý đăng xuất
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "dangnhap.html";
  });
});
