import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyBAuAz0CEdXM0hmNX1hvpHcLW3PSg7EUBA",
  authDomain: "hostel-booking-app-newton.firebaseapp.com",
  projectId: "hostel-booking-app-newton",
  storageBucket: "hostel-booking-app-newton.appspot.com",
  messagingSenderId: "223730858340",
  appId: "1:223730858340:web:34d2f7754e1c390f04e271",
  measurementId: "G-NKMBVRYFSY"
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
