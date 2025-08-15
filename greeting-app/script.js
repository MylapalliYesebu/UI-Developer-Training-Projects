function greetUser() {
    const userName = document.getElementById('userName').value;
    const greetingMessage = document.getElementById('greeting');

    if (userName) {
        greetingMessage.textContent = `Hello, ${userName}! Welcome to Greeting App.`;
        document.getElementById('userName').value = "";
    }   
}

function clearGreeting() {
    document.getElementById('greeting').textContent = "";
}