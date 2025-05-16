// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

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
const registerBtn = document.getElementById("register-btn");
const emailInput = document.getElementById("register-email");
const passwordInput = document.getElementById("register-password");

// Đăng ký tài khoản
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    Swal.fire("Lỗi", "Vui lòng nhập đầy đủ thông tin", "error");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Swal.fire("Thành công", "Đăng ký thành công!", "success").then(() => {
        window.location.href = "dangnhap.html";
      });
    })
    .catch((error) => {
      Swal.fire("Lỗi", error.message, "error");
    });
});
