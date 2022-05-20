var firebaseConfig = {
    apiKey: "AIzaSyBlOebvO-LO6jpIW9QysIwCZ0vj0nfNzzo",
    authDomain: "kwitter-7d7dd.firebaseapp.com",
    databaseURL: "https://kwitter-7d7dd-default-rtdb.firebaseio.com",
    projectId: "kwitter-7d7dd",
    storageBucket: "kwitter-7d7dd.appspot.com",
    messagingSenderId: "944260638637",
    appId: "1:944260638637:web:fd697f1e3e8e4f9b94a324",
    measurementId: "G-WXQ90QEY31"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
     purpose:"adding user"   
    });
}