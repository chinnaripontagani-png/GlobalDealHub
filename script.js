// GlobalDealHub Company Discovery System

let companies = JSON.parse(localStorage.getItem("companies")) || [];

// Add company
function addCompany() {
    const name = document.getElementById("companyName").value;
    const industry = document.getElementById("industry").value;
    const country = document.getElementById("country").value;
    const funding = document.getElementById("funding").value;

    const company = {
        name,
        industry,
        country,
        funding
    };

    companies.push(company);
    localStorage.setItem("companies", JSON.stringify(companies));

    alert("Company Added to GlobalDealHub 🌍");
    displayCompanies();
}

// Show companies
function displayCompanies() {
    const container = document.getElementById("companyList");
    if (!container) return;

    container.innerHTML = "";

    companies.forEach(company => {
        const card = document.createElement("div");
        card.className = "company-card";

        card.innerHTML = `
            <h3>${company.name}</h3>
            <p><strong>Industry:</strong> ${company.industry}</p>
            <p><strong>Country:</strong> ${company.country}</p>
            <p><strong>Funding Needed:</strong> ${company.funding}</p>
        `;

        container.appendChild(card);
    });
}

// Search companies
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
        card.className = "company-card";

        card.innerHTML = `
            <h3>${company.name}</h3>
            <p>Industry: ${company.industry}</p>
            <p>Country: ${company.country}</p>
            <p>Funding: ${company.funding}</p>
        `;

        container.appendChild(card);
    });
}

window.onload = displayCompanies;