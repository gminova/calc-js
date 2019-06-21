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
let lastInput = undefined;
//workers
let workerLeft = undefined;
let operator = undefined;
let workerRight = undefined;
let master = [];
//OUTPUT
let result = document.getElementById('result');
let product = undefined;


//EVENTS FOR DIGITS
for (let i = 0; i <= 9; i++) {
    digits[i].onclick = function () {
        lastInput = i;
        input.push(i);
        display.value = input.toString().split(',').join('');
        operations.multiply.disabled = false;
        operations.divide.disabled = false;
        operations.add.disabled = false;
        operations.subtract.disabled = false;
    }
}
//EVENTS FOR OPERATORS BY DEFAULT
operations.multiply.disabled = true;
operations.divide.disabled = true;
operations.add.disabled = true;
operations.subtract.disabled = true;


//EVENTS FOR OPERATIONS:
//MULTIPLY
operations.multiply.onclick = function () {
    if (input[input.length - 1] == '/' ||
        input[input.length - 1] == '+' ||
        input[input.length - 1] == '-') {
        input.pop();
        display.value = input.toString().split(',').join('');
    }
    else if(input[input.length - 1] == '.') {
    operations.multiply.disabled = true;
    }
    operator = '*';
    input.push('*');
    display.value = input.toString().split(',').join('');
    operations.multiply.disabled = true;
    operations.divide.disabled = false;
    operations.add.disabled = false;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}
//DIVIDE
operations.divide.onclick = function () {
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '+' ||
        input[input.length - 1] == '-') {
        input.pop();
        display.value = input.toString().split(',').join('');
    }
    else if(input[input.length - 1] == '.') {
    operations.divide.disabled = true;
    }
    operator = '/';
    input.push('/');
    display.value = input.toString().split(',').join('');
    operations.multiply.disabled = false;
    operations.divide.disabled = true;
    operations.add.disabled = false;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}
//ADD
operations.add.onclick = function () {
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '/' ||
        input[input.length - 1] == '-') {
        input.pop();
        display.value = input.toString().split(',').join('');
    }
    else if(input[input.length - 1] == '.') {
    operations.add.disabled = true;
    }
    operator = '+';
    input.push('+');
    display.value = input.toString().split(',').join('');
    operations.multiply.disabled = false;
    operations.divide.disabled = false;
    operations.add.disabled = true;
    operations.subtract.disabled = false;
    operations.decimal.disabled = false;
}
//SUBTRACT
operations.subtract.onclick = function () {
    if (input[input.length - 1] == '*' ||
        input[input.length - 1] == '/' ||
        input[input.length - 1] == '+') {
        input.pop();
        display.value = input.toString().split(',').join('');
    }
    else if(input[input.length - 1] == '.') {
    operations.subtract.disabled = true;
    }
    operator = '-';
    input.push('-');
    display.value = input.toString().split(',').join('');
    operations.multiply.disabled = false;
    operations.divide.disabled = false;
    operations.add.disabled = false;
    operations.subtract.disabled = true;
    operations.decimal.disabled = false;
}
//DECIMAL
operations.decimal.onclick = function () {
    lastInput = '.';
    input.push('.');
    display.value = input.toString().split(',').join('');
    operations.multiply.disabled = true;
    operations.divide.disabled = true;
    operations.add.disabled = true;
    operations.subtract.disabled = true;
    operations.decimal.disabled = true;
}
//DELETE
operations.delete.onclick = function () {
    if (input[input.length - 1] == '.') {
        operations.decimal.disabled = false;
    } 
    input.pop();
    display.value = input.toString().split(',').join('');
    if (input.length == 0) {
        input.length = 0;
        display.value = 0;
    }
}

//CLEAR FUNCTION
function clear() {
    operations.decimal.disabled = false;
    operations.multiply.disabled = true;
    operations.divide.disabled = true;
    operations.add.disabled = true;
    operations.subtract.disabled = true;
    input.length = 0;
    lastInput = undefined;
    display.value = 0;
}
operations.clear.addEventListener('click', clear)