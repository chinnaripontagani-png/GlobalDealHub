function sendMessage() {
let input = document.getElementById("messageInput");
let chatBox = document.getElementById("chatBox");

let message = input.value;

if(message.trim() === "") return;

let msg = document.createElement("p");
msg.textContent = "You: " + message;

chatBox.appendChild(msg);

input.value = "";
}
