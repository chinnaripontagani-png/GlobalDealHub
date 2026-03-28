function startNetworking(){
window.location.href="signup.html";
}

function openLogin(){
window.location.href="login.html";
}

function openCompanies(){
window.location.href="companies.html";
}

function createAccount(){
let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

localStorage.setItem("user",u);
localStorage.setItem("pass",p);

alert("Account created!");
window.location.href="login.html";
}

function login(){
let u=document.getElementById("loginUser").value;
let p=document.getElementById("loginPass").value;

let su=localStorage.getItem("user");
let sp=localStorage.getItem("pass");

if(u===su && p===sp){
window.location.href="dashboard.html";
}
else{
alert("Wrong details");
}
}

function connectCompany(name){
alert("Connection request sent to "+name);
}

function sendMessage(){
let input=document.getElementById("messageInput");
let chat=document.getElementById("chatBox");

if(input.value==="") return;

let msg=document.createElement("p");
msg.innerText="You: "+input.value;

chat.appendChild(msg);
input.value="";
}
