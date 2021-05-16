
//ADD YOUR FIREBASE LINKS HERE
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
    student_name = localStorage.getItem("student_name");
document.getElementById("student_name");

function addChat()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

     localStorage.setItem("room_name", room_name);
     window.location="chat_page.html";
}

function getData() {
      firebase.database().ref("/").on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        //Start code
                        console.log("room_name",Room_names);
                        row = "<div class='room_name' id="+Room_names+
                        " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
                        document.getElementById("output").innerHTML += row;

                        //End code
                  });
            });
}

function redirectToRoomName(names){
      console.log(names);
      localStorage.setItem("room_name",names);
      window.location="chat_page.html";


}

function logout(){
      window.location="index.html";
}


getData();
 //function addroom start//
 //function addroom end//
