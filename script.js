// GlobalDealHub Full System

let users = JSON.parse(localStorage.getItem("users")) || [];
let companies = JSON.parse(localStorage.getItem("companies")) || [];

/* ======================
   SIGNUP SYSTEM
====================== */
function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    const user = {
        username,
        password
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "login.html";
}

/* ======================
   LOGIN SYSTEM
====================== */
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const foundUser = users.find(user =>
        user.username === username && user.password === password
    );

    if (foundUser) {
        localStorage.setItem("loggedInUser", username);
        alert("Login successful 🚀");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}

/* ======================
   DASHBOARD
====================== */
function loadDashboard() {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const welcome = document.getElementById("welcomeUser");
    if (welcome) {
        welcome.innerText = "Welcome " + user;
    }
}

/* ======================
   COMPANY SYSTEM
====================== */
function addCompany() {
    const name = document.getElementById("companyName").value;
    const industry = document.getElementById("industry").value;
    const country = document.getElementById("country").value;
    const funding = document.getElementById("funding").value;

    const company = { name, industry, country, funding };

    companies.push(company);
    localStorage.setItem("companies", JSON.stringify(companies));

    alert("Company added to GlobalDealHub 🌍");
    displayCompanies();
}

function displayCompanies() {
    const container = document.getElementById("companyList");
    if (!container) return;

    container.innerHTML = "";

    companies.forEach(company => {
        const card = document.createElement("div");
        card.innerHTML = `
            <h3>${company.name}</h3>
            <p>Industry: ${company.industry}</p>
            <p>Country: ${company.country}</p>
            <p>Funding: ${company.funding}</p>
            <hr>
        `;
        container.appendChild(card);
    });
}

function searchCompanies() {
    const search = document.getElementById("search").value.toLowerCase();
    const container = document.getElementById("companyList");

    container.innerHTML = "";

    const filtered = companies.filter(company =>
        company.name.toLowerCase().includes(search) ||
        company.industry.toLowerCase().includes(search) ||
        company.country.toLowerCase().includes(search)
    );

    filtered.forEach(company => {
        const card = document.createElement("div");
        card.innerHTML = `
            <h3>${company.name}</h3>
            <p>Industry: ${company.industry}</p>
            <p>Country: ${company.country}</p>
            <p>Funding: ${company.funding}</p>
            <hr>
        `;
        container.appendChild(card);
    });
}

window.onload = function () {
    displayCompanies();
    loadDashboard();
};