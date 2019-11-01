firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.alert(user.email);
    // ...
  } else {
    window.alert("Usuario Deslogado")
  }
});

function login(){
	var userEmail = document.getElementById("email_field").value;
	var pwd = "teste123";


	firebase.auth().signInWithEmailAndPassword(userEmail, pwd).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...

	  window.alert(errorMessage);
	});
}