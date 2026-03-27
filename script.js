function signup() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let role = document.getElementById("role").value;

if(name === "" || email === "" || password === "" || role === "") {
alert("Please fill all fields");
return;
}

let user = {
name,
email,
password,
role
};

localStorage.setItem(email, JSON.stringify(user));

let users = JSON.parse(localStorage.getItem("users")) || [];
users.push(user);
localStorage.setItem("users", JSON.stringify(users));

alert("Account created successfully!");
window.location.href = "login.html";

}

function login() {

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let storedUser = localStorage.getItem(email);

if(storedUser === null) {
alert("User not found");
return;
}

let user = JSON.parse(storedUser);

if(user.password === password) {
localStorage.setItem("loggedInUser", email);
window.location.href = "dashboard.html";
} else {
alert("Incorrect password");
}

}

function logout() {
localStorage.removeItem("loggedInUser");
window.location.href = "index.html";
}

function postDeal() {

let title = document.getElementById("dealTitle").value;
let company = document.getElementById("dealCompany").value;
let amount = document.getElementById("dealAmount").value;

if(title === "" || company === "" || amount === "") {
alert("Fill all deal fields");
return;
}

let deal = { title, company, amount };

let deals = JSON.parse(localStorage.getItem("deals")) || [];
deals.push(deal);
localStorage.setItem("deals", JSON.stringify(deals));

displayDeals();

}

function displayDeals() {

let container = document.getElementById("dealsContainer");
if(!container) return;

container.innerHTML = "";

let deals = JSON.parse(localStorage.getItem("deals")) || [];

deals.forEach(function(deal) {
container.innerHTML += `
<div class="deal-box">
<h4>${deal.title}</h4>
<p><b>Company:</b> ${deal.company}</p>
<p><b>Investment Needed:</b> ${deal.amount}</p>
</div>
`;
});

}

function saveProfile() {

let companyName = document.getElementById("companyName").value;
let industry = document.getElementById("industry").value;
let country = document.getElementById("country").value;
let funding = document.getElementById("funding").value;
let ceoName = document.getElementById("ceoName").value;

if(companyName === "" || industry === "" || country === "" || funding === "" || ceoName === "") {
alert("Fill all profile details");
return;
}

let profile = {
companyName,
industry,
country,
funding,
ceoName
};

localStorage.setItem("businessProfile", JSON.stringify(profile));

displayProfile();
displayCompanies();

}

function displayProfile() {

let container = document.getElementById("profileDisplay");
if(!container) return;

let profile = JSON.parse(localStorage.getItem("businessProfile"));
if(!profile) return;

container.innerHTML = `
<div class="deal-box">
<h3>${profile.companyName}</h3>
<p><b>Industry:</b> ${profile.industry}</p>
<p><b>Country:</b> ${profile.country}</p>
<p><b>Funding Needed:</b> ${profile.funding}</p>
<p><b>CEO:</b> ${profile.ceoName}</p>
</div>
`;

}

function displayCompanies() {

let container = document.getElementById("companiesContainer");
if(!container) return;

container.innerHTML = "";

let profile = JSON.parse(localStorage.getItem("businessProfile"));
if(!profile) return;

container.innerHTML += `
<div class="deal-box">
<h3>${profile.companyName}</h3>
<p><b>Industry:</b> ${profile.industry}</p>
<p><b>Country:</b> ${profile.country}</p>
<p><b>Funding Needed:</b> ${profile.funding}</p>
<p><b>CEO:</b> ${profile.ceoName}</p>
</div>
`;

}

function sendMessage() {

let receiver = document.getElementById("receiver").value;
let messageText = document.getElementById("messageText").value;

if(receiver === "" || messageText === "") {
alert("Enter message details");
return;
}

let message = { receiver, messageText };

let messages = JSON.parse(localStorage.getItem("messages")) || [];
messages.push(message);
localStorage.setItem("messages", JSON.stringify(messages));

displayMessages();

}

function displayMessages() {

let container = document.getElementById("messagesContainer");
if(!container) return;

container.innerHTML = "";

let messages = JSON.parse(localStorage.getItem("messages")) || [];

messages.forEach(function(msg) {
container.innerHTML += `
<div class="deal-box">
<p><b>To:</b> ${msg.receiver}</p>
<p>${msg.messageText}</p>
</div>
`;
});

}

function displayNetwork() {

let container = document.getElementById("networkContainer");
if(!container) return;

container.innerHTML = "";

let users = JSON.parse(localStorage.getItem("users")) || [];

users.forEach(function(user) {

container.innerHTML += `
<div class="deal-box">
<h3>${user.name}</h3>
<p><b>Role:</b> ${user.role}</p>
<p><b>Email:</b> ${user.email}</p>
</div>
`;

});

}

displayDeals();
displayProfile();
displayCompanies();
displayMessages();
displayNetwork();