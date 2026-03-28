function startNetworking(){
window.location.href = "signup.html";
}

function openLogin(){
window.location.href = "login.html";
}

function openCompanies(){
window.location.href = "companies.html";
}

function createAccount(){
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

localStorage.setItem("gdh_user", user);
localStorage.setItem("gdh_pass", pass);

alert("Account created successfully!");
window.location.href = "login.html";
}

function login(){
let user = document.getElementById("loginUser").value;
let pass = document.getElementById("loginPass").value;

let savedUser = localStorage.getItem("gdh_user");
let savedPass = localStorage.getItem("gdh_pass");

if(user === savedUser && pass === savedPass){
alert("Login successful!");
window.location.href = "dashboard.html";
}
else{
alert("Wrong login details");
}
}

function goMessages(){
window.location.href = "messages.html";
}

function goNetwork(){
window.location.href = "network.html";
}

function logout(){
window.location.href = "index.html";
}

function sendMessage(){
let msgInput = document.getElementById("messageInput");
let chat = document.getElementById("chatBox");

if(msgInput.value.trim() === "") return;

let p = document.createElement("p");
p.innerText = "You: " + msgInput.value;

chat.appendChild(p);
msgInput.value = "";
}
