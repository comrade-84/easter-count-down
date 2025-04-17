let count = 10;
const counterElement = document.getElementById('counter');
const messageElement = document.getElementById('message');

const countdown = setInterval(() => {
    count--;
    counterElement.textContent = count;
    
    if (count === 0) {
        clearInterval(countdown);
        counterElement.style.display = 'none';
        messageElement.style.display = 'block';
    }
}, 1000);