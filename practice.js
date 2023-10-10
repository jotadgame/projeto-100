
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDkiNZ2cV7G65bZdiwAcb0afEDhwdD0P58",
  authDomain: "projeto-101-e86be.firebaseapp.com",
  databaseURL: "https://projeto-101-e86be-default-rtdb.firebaseio.com",
  projectId: "projeto-101-e86be",
  storageBucket: "projeto-101-e86be.appspot.com",
  messagingSenderId: "701561040668",
  appId: "1:701561040668:web:34a6b621217f4673b0d4d9"
};

// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);



// Adicionar a função para adicionar usuário 
function addUser()
{
   user_name = document.getElementById("user_name").value;
   firebase.database().ref("/").child(user_name).update({
      purpose : "adicionando usuário"
   })
}