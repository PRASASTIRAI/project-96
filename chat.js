var firebaseConfig = {
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

function addStd(){
  student_name= document.getElementById("student_name").value;
  localStorage.setItem("student_name",student_name);
  window.location="chat_room.html";
 
}