const firebaseConfig = {
  apiKey: "AIzaSyDkiNZ2cV7G65bZdiwAcb0afEDhwdD0P58",
  authDomain: "projeto-101-e86be.firebaseapp.com",
  databaseURL: "https://projeto-101-e86be-default-rtdb.firebaseio.com",
  projectId: "projeto-101-e86be",
  storageBucket: "projeto-101-e86be.appspot.com",
  messagingSenderId: "701561040668",
  appId: "1:701561040668:web:34a6b621217f4673b0d4d9"
};
// Initialize Firebase
// no  firebase vai  estar const  app, nos  vamos trocar para firebase.
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML =
  "Bem-vindo(a), " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionando nome da sala",
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Nome da sala: " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
