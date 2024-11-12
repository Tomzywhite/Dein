document.addEventListener('DOMContentLoaded', function () {
    // Load messages from localStorage when the page loads
    loadMessages();

    // Handle the form submission
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Store the new message in localStorage
        const messages = getMessagesFromLocalStorage();
        messages.push({ name, message });
        localStorage.setItem('messages', JSON.stringify(messages));

        // Add the new message to the messages section
        addMessageToPage(name, message);

        // Clear form inputs (optional)
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    });
});

// Function to load messages from localStorage
function loadMessages() {
    const messages = getMessagesFromLocalStorage();
    messages.forEach(function(message) {
        addMessageToPage(message.name, message.message);
    });
}

// Function to get messages from localStorage
function getMessagesFromLocalStorage() {
    const storedMessages = localStorage.getItem('messages');
    return storedMessages ? JSON.parse(storedMessages) : [];
}

// Function to add a message to the page
function addMessageToPage(name, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const nameElement = document.createElement('p');
    nameElement.classList.add('name');
    nameElement.textContent = name;

    const textElement = document.createElement('p');
    textElement.classList.add('text');
    textElement.textContent = message;

    messageElement.appendChild(nameElement);
    messageElement.appendChild(textElement);

    // Add the new message to the messages container
    document.getElementById('messages').appendChild(messageElement);
}
