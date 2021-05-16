//YOUR FIREBASE LINKS
firebaseConfig = {
      apiKey: "AIzaSyCsAIOHITbluP6syPLQPFKbCFMF3UdpCaU",
      authDomain: "kwitter-cf448.firebaseapp.com",
      databaseURL: "https://kwitter-cf448-default-rtdb.firebaseio.com",
      projectId: "kwitter-cf448",
      storageBucket: "kwitter-cf448.appspot.com",
      messagingSenderId: "7948493365",
      appId: "1:7948493365:web:e32183cb986ecb41f6477c",
      measurementId: "G-QT3VT7JPJN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("student_name");
room_name=localStorage.getItem("room_name");

function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name: user_name,message:msg,like:0 
      });
      document.getElementById("msg").value="";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

//Start code
console.log(firebase_message_id);

//End code
      } });  }); }
getData();
