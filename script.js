function goSignup() {
window.location.href = "signup.html";
}

function goLogin() {
window.location.href = "login.html";
}

function goCompanies() {
window.location.href = "companies.html";
}

function createAccount() {
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

localStorage.setItem("username", username);
localStorage.setItem("password", password);

alert("Account created successfully!");
window.location.href = "login.html";
}

function login() {
let username = document.getElementById("loginUser").value;
let password = document.getElementById("loginPass").value;

let storedUser = localStorage.getItem("username");
let storedPass = localStorage.getItem("password");

if(username === storedUser && password === storedPass) {
alert("Login successful!");
window.location.href = "dashboard.html";
} else {
alert("Wrong username or password");
}
}

function openCompanies() {
window.location.href = "companies.html";
}

function openMessages() {
window.location.href = "messages.html";
}

function logout() {
alert("Logged out");
window.location.href = "index.html";
}
