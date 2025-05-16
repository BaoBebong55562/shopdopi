// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM
const loginBtn = document.getElementById("login-btn");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");

// Đăng nhập
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    Swal.fire("Lỗi", "Vui lòng nhập đầy đủ thông tin", "error");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Swal.fire("Thành công", "Đăng nhập thành công!", "success").then(() => {
        // Chuyển tới trang chính
        window.location.href = "index.html"; // thay bằng trang chính của bạn
      });
    })
    .catch((error) => {
      Swal.fire("Lỗi", error.message, "error");
    });
});
