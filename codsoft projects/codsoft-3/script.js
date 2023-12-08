const resultInput = document.getElementById('result');
const numButtons = document.querySelectorAll('.num-button');
const opButtons = document.querySelectorAll('.op-button');
const useButtons = document.querySelectorAll('.use-button');
const calculateButton = document.getElementById('calculate');

let currentInput = '';

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        resultInput.value = currentInput;
    });
});

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += ' ' + button.textContent + ' ';
        resultInput.value = currentInput;
    });
});
useButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput = ' ';
        resultInput.value = currentInput;
    });
});

calculateButton.addEventListener('click', () => {
    try {
        currentInput = eval(currentInput).toString();
        resultInput.value = currentInput;
    } catch (error) {
        resultInput.value = 'Error';
    }
});