function searchCompanies() {
let input = document.getElementById("searchBox").value.toLowerCase();
let cards = document.getElementsByClassName("company-card");

for (let i = 0; i < cards.length; i++) {
let title = cards[i].getElementsByTagName("h3")[0];
let textValue = title.textContent || title.innerText;

if (textValue.toLowerCase().indexOf(input) > -1) {
cards[i].style.display = "";
} else {
cards[i].style.display = "none";
}
}
}

function connectCompany(name) {
alert("Connection request sent to " + name);
}
function connectUser(name) {
alert("Connection request sent to " + name);
}
