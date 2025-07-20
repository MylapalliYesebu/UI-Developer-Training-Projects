function greetUser() {
    const userName = document.getElementById('userName').value;
    const greetingMessage = document.getElementById('greeting');

    if (userName) {
        greetingMessage.textContent = `Hello, ${userName}! Welcome to Greeting App.`;
    }   
}

function clearGreeting() {
    document.getElementById('userName').value = "";
    document.getElementById('greeting').textContent = "";
}