//DIGITS - BUTTONS
const digits = [
    document.getElementById('zero'),
    document.getElementById('one'),
    document.getElementById('two'),
    document.getElementById('three'),
    document.getElementById('four'),
    document.getElementById('five'),
    document.getElementById('six'),
    document.getElementById('seven'),
    document.getElementById('eight'),
    document.getElementById('nine')
]

//OPERATIONS - BUTTONS
const operations = {
    //MATHEMATICAL OPERATIONS
    'multiply': document.getElementById('multiply'),
    'divide': document.getElementById('divide'),
    'add': document.getElementById('add'),
    'subtract': document.getElementById('subtract'),
    //SPECIAL OPERATIONS
    'decimal': document.getElementById('decimal'),
    'clear': document.getElementById('clear'),
    'delete': document.getElementById('delete'),
    'equals': document.getElementById('equals')
}

//INPUT
let display = document.getElementById('display');
let input = [];
let lastInput = '';
//workers
let chunk = '';
let operator = '';
//OUTPUT
let result = document.getElementById('result');


//EVENTS FOR DIGITS
for (let i = 0; i <= 9; i++) {
    digits[i].onclick = function () {
        if (result.value == '' && i == 0) {
            digits[0].disabled = true;
            lockDigitsOneToNine();
        }
        lastInput = i;
        input.push(i);
        display.value = input.toString().split(',').join('');
        chunk += lastInput.toString();
        result.value = chunk;
        unlockMathOperators();
    }
}
//EVENTS FOR OPERATORS BY DEFAULT
function lockMathOperators() {
    operations.multiply.disabled = true;
    operations.divide.disabled = true;
    operations.add.disabled = true;
    operations.subtract.disabled = true;
}

function unlockMathOperators() {
    operations.multiply.disabled = false;
    operations.divide.disabled = false;
    operations.add.disabled = false;
    operations.subtract.disabled = false;
}

function lockDigitsOneToNine() {
    digits[1].disabled = true;
    digits[2].disabled = true;
    digits[3].disabled = true;
    digits[4].disabled = true;
    digits[5].disabled = true;
    digits[6].disabled = true;
    digits[7].disabled = true;
    digits[8].disabled = true;
    digits[9].disabled = true;
}

function unlockDigitsOneToNine() {
    digits[1].disabled = false;
    digits[2].disabled = false;
    digits[3].disabled = false;
    digits[4].disabled = false;
    digits[5].disabled = false;
    digits[6].disabled = false;
    digits[7].disabled = false;
    digits[8].disabled = false;
    digits[9].disabled = false;
}

function lockALLDigits() {
    digits[0].disabled = true;
    lockDigitsOneToNine();
}

function unlockAllDigits() {
    digits[0].disabled = false;
    unlockDigitsOneToNine();
}

window.onload = function () {
    display.value = '0';
    lockMathOperators();
}

//EVENTS FOR OPERATIONS:
//MULTIPLY
operations.multiply.onclick = function () {
    unlockAllDigits();
    operator = '*';
    if (input[input.length - 1] == '/' ||
        input[input.length - 1] == '+' ||
        input[input.length - 1] == '-') {
        input.pop();
    }
    input.push(operator);
    display.value = input.toString().split(',').join('');
    result.value = '';
    chunk = '';

    operations.multiply.disabled = true;
    operations.divide.disabled = false;
    operations.add.disabled = false;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}

//DIVIDE
operations.divide.onclick = function () {
    unlockAllDigits();
    operator = '/';
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '+' ||
        input[input.length - 1] == '-') {
        input.pop();
    }
    input.push(operator);
    display.value = input.toString().split(',').join('');
    result.value = '';
    chunk = '';

    operations.multiply.disabled = false;
    operations.divide.disabled = true;
    operations.add.disabled = false;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}
//ADD
operations.add.onclick = function () {
    unlockAllDigits();
    operator = '+';
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '/' ||
        input[input.length - 1] == '-') {
        input.pop();
    }
    input.push(operator);
    display.value = input.toString().split(',').join('');
    result.value = '';
    chunk = '';

    operations.multiply.disabled = false;
    operations.divide.disabled = false;
    operations.add.disabled = true;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}
//SUBTRACT
operations.subtract.onclick = function () {
    unlockAllDigits();
    operator = '-';
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '/' ||
        input[input.length - 1] == '+') {
        input.pop();
    }
    input.push(operator);
    display.value = input.toString().split(',').join('');
    result.value = '';
    chunk = '';

    operations.multiply.disabled = false;
    operations.divide.disabled = false;
    operations.add.disabled = false;
    operations.subtract.disabled = true;
    operations.decimal.disabled = false;
}
//DECIMAL
operations.decimal.onclick = function () {
    operations.decimal.disabled = true;
    unlockAllDigits();
    if (input.length == 0 ||
        input[input.length - 1] == '*' ||
        input[input.length - 1] == '/' ||
        input[input.length - 1] == '+' ||
        input[input.length - 1] == '-') {
        lastInput = '0.';
    } else {
        lastInput = '.';
    }
    input.push(lastInput);
    display.value = input.toString().split(',').join('');
    chunk += lastInput.toString();
    result.value = chunk;
    lockMathOperators();
}

//EQUALS
function equals() {
    result.value = eval(display.value);
    chunk = '';
    lockALLDigits();
}

operations.equals.addEventListener('click', equals);

//DELETE
operations.delete.onclick = function () {
    unlockAllDigits();
    if (input[input.length - 1] == '0.' ||
        input[input.length - 1] == '.') {
        operations.decimal.disabled = false;
    }
    for (let i = input.length; i >= 0; i--) {
        if (input[input.length - 1] != '*' &&
            input[input.length - 1] != '/' &&
            input[input.length - 1] != '+' &&
            input[input.length - 1] != '-') {
            input.pop();
        }
    }
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '/' ||
        input[input.length - 1] == '+' ||
        input[input.length - 1] == '-') {
        input.pop();
        operator = '';
        unlockMathOperators();
    }
    display.value = input.toString().split(',').join('');
    if (input.length == 0) {
        clear();
    }
    chunk = '';
    result.value = chunk;
}

//CLEAR FUNCTION
function clear() {
    operations.decimal.disabled = false;
    unlockAllDigits();
    lockMathOperators();
    input.length = 0;
    display.value = 0;
    lastInput = '';
    //workers
    chunk = '';
    operator = '';
    //OUTPUT
    result.value = '';
    product = '';
}
operations.clear.addEventListener('click', clear);