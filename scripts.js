let pw = document.getElementById("password");
let confirmPW = document.getElementById("confirm-password");

pw.addEventListener('keyup', checkPasswords);
confirmPW.addEventListener('keyup', checkPasswords);

//Adds an error class to the password inputs if they don't match
function checkPasswords() {
    if(pw.value != confirmPW.value) {
        pw.classList.add("error"); 
    } else {
        pw.classList.remove('error');
    }

    if(confirmPW.value != pw.value) {
        confirmPW.classList.add("error"); 
    } else {
        confirmPW.classList.remove('error');
    }
}