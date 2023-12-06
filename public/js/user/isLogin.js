// JavaScript Document
// validate that user is log-in
var auth = firebase.apps[0].auth();

function validar() {
    var uid = -1
    //const user = auth.currentUser;
    auth.onAuthStateChanged((user) => {
        if (user) {
            uid = user.uid;
        } else {
            document.location.href = 'login.html';
        }
    });
    return uid;
}

function salir() {
    auth.signOut().then(() => {
        alert('Successfully closed session');
        document.location.href = 'login.html';
    }).catch((error) => {
        alert('Failed to log out: ' + error.message);
    });
}