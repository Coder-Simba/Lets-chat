
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD6EkpSE1q2dhbAptOvvmDmex36p_BJ_y8",
      authDomain: "kwitter-2-1cae9.firebaseapp.com",
      databaseURL: "https://kwitter-2-1cae9-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-1cae9",
      storageBucket: "kwitter-2-1cae9.appspot.com",
      messagingSenderId: "521946963532",
      appId: "1:521946963532:web:56694068e19ddd5fb99ee9",
      measurementId: "G-1QV9B09F0R"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html"


}






function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}