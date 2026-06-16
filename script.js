
const form =
document.getElementById("contactForm");

const error =
document.getElementById("error");

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const phone =
document.getElementById("phone").value.trim();

const message =
document.getElementById("message").value.trim();

const emailPattern =
/^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

if(
name === "" ||
email === "" ||
phone === "" ||
message === ""
){

error.style.color="#ff4d4d";

error.innerText=
"All fields are required.";

return;
}

if(
!email.match(emailPattern)
){

error.style.color="#ff4d4d";

error.innerText=
"Please enter a valid email address.";

return;
}

if(
phone.length < 10
){

error.style.color="#ff4d4d";

error.innerText=
"Please enter a valid phone number.";

return;
}

error.style.color="#00ff88";

error.innerText=
"Form submitted successfully!";

form.reset();

});

