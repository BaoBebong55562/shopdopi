// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9P7v4L5CMLgtGgOaPZxXAiiBWPKxfuGg",
  authDomain: "shop-dopi.firebaseapp.com",
  projectId: "shop-dopi",
  storageBucket: "shop-dopi.firebasestorage.app",
  messagingSenderId: "918712768733",
  appId: "1:918712768733:web:3badcfca5770cc7754e334",
  measurementId: "G-XWZN1CC7GB"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
