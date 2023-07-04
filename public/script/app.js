document.addEventListener("DOMContentLoaded", async function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDOmez9HXtqrqXCbMV_Y0Lb0y75zjUIgqY",
    authDomain: "fb-analytics-31f94.firebaseapp.com",
    projectId: "fb-analytics-31f94",
    storageBucket: "fb-analytics-31f94.appspot.com",
    messagingSenderId: "856047504062",
    appId: "1:856047504062:web:24a33ce217456231ad2cef",
    measurementId: "G-Z67RX1EYKH",
  }
  firebase.initializeApp(firebaseConfig)
  const analytics = getAnalytics(firebase)
})
