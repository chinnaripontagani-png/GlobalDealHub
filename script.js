// Navigate to signup page
function startNetworking() {
    window.location.href = "signup.html";
}

// Navigate to login page
function openLogin() {
    window.location.href = "login.html";
}

// Open companies page
function openCompanies() {
    window.location.href = "companies.html";
}

// Open networking page
function goNetwork() {
    window.location.href = "network.html";
}

// Open messages page
function goMessages() {
    window.location.href = "messages.html";
}

// Create account
function createAccount() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    localStorage.setItem("gdh_user", username);
    localStorage.setItem("gdh_pass", password);

    alert("Account created successfully!");
    window.location.href = "login.html";
}

// Login system
function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("gdh_user");
    let savedPass = localStorage.getItem("gdh_pass");

    if (username === savedUser && password === savedPass) {
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect username or password");
    }
}

// Connect to company
function connectCompany(companyName) {
    alert("Connection request sent to " + companyName);
}

// Send message
function sendMessage() {
    let messageInput = document.getElementById("messageInput");
    let chatBox = document.getElementById("chatBox");

    let message = messageInput.value.trim();

    if (message === "") return;

    let msg = document.createElement("p");
    msg.innerText = "You: " + message;

    chatBox.appendChild(msg);

    messageInput.value = "";
}

// Logout
function logout() {
    alert("Logged out successfully");
    window.location.href = "index.html";
}
