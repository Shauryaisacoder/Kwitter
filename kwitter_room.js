
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyBOhHc6RHY3YxZbUJCzgL4rf2wMhfFwdb0",
      authDomain: "kwitter-f21a5.firebaseapp.com",
      databaseURL: "https://kwitter-f21a5-default-rtdb.firebaseio.com",
      projectId: "kwitter-f21a5",
      storageBucket: "kwitter-f21a5.appspot.com",
      messagingSenderId: "377823463612",
      appId: "1:377823463612:web:f10682948ded72574c68b9",
      measurementId: "G-RBVYD11HCS"
    };
    
    firebase.initializeApp(firebaseConfig);
    document.getElementById("user_name").innerHTML="Welcome "+localStorage.getItem("user_name")+"!"; 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name -" + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
purpose :"adding room name"
      });

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

