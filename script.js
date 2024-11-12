document.addEventListener("DOMContentLoaded", () => {
    loadMessages();
    setupFormSubmission();
});

function setupFormSubmission() {
    const messageForm = document.getElementById("messageForm");
    messageForm.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = getInputValue("name");
    const message = getInputValue("message");
    
    if (name && message) {
        addMessage(name, message);
        clearInputFields();
    }
}

function getInputValue(inputId) {
    return document.getElementById(inputId).value.trim();
}

function clearInputFields() {
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}

function loadMessages() {
    const messages = getStoredMessages();
    messages.forEach(({ name, message }) => displayMessage(name, message));
}

function addMessage(name, message) {
    const messages = getStoredMessages();
    messages.push({ name, message });
    saveMessages(messages);
    displayMessage(name, message);
}

function getStoredMessages() {
    return JSON.parse(localStorage.getItem("birthdayMessages")) || [];
}

function saveMessages(messages) {
    localStorage.setItem("birthdayMessages", JSON.stringify(messages));
}

function displayMessage(name, message) {
    const messageDiv = createMessageElement(name, message);
    document.getElementById("messages").appendChild(messageDiv);
}

function createMessageElement(name, message) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
    return messageDiv;
}