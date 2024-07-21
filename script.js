function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = new Function('return ' + display.value)();
    } catch {
        display.value = 'Error';
    }
}
