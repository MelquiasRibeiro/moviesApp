import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDxrJxrNqbqOVUV7SOimoD03k9C56lR7wo",
    authDomain: "movies-app-bd442.firebaseapp.com",
    databaseURL: "https://movies-app-bd442-default-rtdb.firebaseio.com",
    projectId: "movies-app-bd442",
    storageBucket: "movies-app-bd442.appspot.com",
    messagingSenderId: "937567201038",
    appId: "1:937567201038:web:12355962a4ffc892dd995f",
    measurementId: "G-F38ZZRW5LG"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  