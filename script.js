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

window.onload = function () {
    display.value = '0';
    lockMathOperators();
}

//EVENTS FOR OPERATIONS:
//MULTIPLY
operations.multiply.onclick = function () {
    operator = '*';
    if (input[input.length - 1] == '/' ||
        input[input.length - 1] == '+' ||
        input[input.length - 1] == '-') {
        input.pop();
    }
    input.push(operator);
    display.value = input.toString().split(',').join('');

    chunk = '';

    operations.multiply.disabled = true;
    operations.divide.disabled = false;
    operations.add.disabled = false;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}

//DIVIDE
operations.divide.onclick = function () {
    operator = '/';
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '+' ||
        input[input.length - 1] == '-') {
        input.pop();
    }
    input.push(operator);
    display.value = input.toString().split(',').join('');

    chunk = '';

    operations.multiply.disabled = false;
    operations.divide.disabled = true;
    operations.add.disabled = false;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}
//ADD
operations.add.onclick = function () {
    operator = '+';
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '/' ||
        input[input.length - 1] == '-') {
        input.pop();
    }
    input.push(operator);
    display.value = input.toString().split(',').join('');

    chunk = '';

    operations.multiply.disabled = false;
    operations.divide.disabled = false;
    operations.add.disabled = true;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}
//SUBTRACT
operations.subtract.onclick = function () {
    operator = '-';
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '/' ||
        input[input.length - 1] == '+') {
        input.pop();
    }
    input.push(operator);
    display.value = input.toString().split(',').join('');

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
}

operations.equals.addEventListener('click', equals);

//DELETE
operations.delete.onclick = function () {
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