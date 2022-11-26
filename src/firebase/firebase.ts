import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBqpLyIp0E_DxEBAYc3oZUa3HMNgmTqT48",
    authDomain: "guilherme-nav-bar.firebaseapp.com",
    projectId: "guilherme-nav-bar",
    storageBucket: "guilherme-nav-bar.appspot.com",
    messagingSenderId: "57104837487",
    appId: "1:57104837487:web:8f6b6562fa64dc6620d69a"
};

export const fbConfig = initializeApp(firebaseConfig);