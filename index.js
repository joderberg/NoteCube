// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/database'; // Om du behöver använda Firebase Realtime Database
const firebaseConfig = {
  apiKey: "AIzaSyCHPM1tx3m6lRHqEet5DPraTtiG2tFmoNI",
  authDomain: "dittverktyg.firebaseapp.com",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "dittverktyg",
  storageBucket: "dittverktyg.appspot.com",
  messagingSenderId: "86958189959",
  appId: "1:86958189959:web:b66175599a6e0fdd60b722"
};
// Initialisera Firebase
const app = initializeApp(firebaseConfig);


// Använd createRoot istället för ReactDOM.render
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
