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

//MEMORY
let display = document.getElementById('display');
let result = document.getElementById('result');
let input = [];
let lastInput = undefined;

//EVENTS FOR DIGITS
for (let i = 0; i <= 9; i++) {
    digits[i].onclick = function () {
        lastInput = i;
        input.push(i);
        display.value = input.toString().split(',').join('');
    }
}

//EVENTS FOR OPERATIONS:

//MULTIPLY
operations.multiply.onclick = function () {
    lastInput = '*';
    input.push('*');
    display.value = input.toString().split(',').join('');
    operations.decimal.disabled = false;
}
//DIVIDE
operations.divide.onclick = function () {
    lastInput = '/';
    input.push('/');
    display.value = input.toString().split(',').join('');
    operations.decimal.disabled = false;
}
//ADD
operations.add.onclick = function () {
    lastInput = '+';
    input.push('+');
    display.value = input.toString().split(',').join('');
    operations.decimal.disabled = false;
}
//SUBTRACT
operations.subtract.onclick = function () {
    lastInput = '-';
    input.push('-');
    display.value = input.toString().split(',').join('');
    operations.decimal.disabled = false;
}
//DECIMAL
operations.decimal.onclick = function () {
    lastInput = '.';
    input.push('.');
    display.value = input.toString().split(',').join('');
    operations.decimal.disabled = true;
}
//DELETE
operations.delete.onclick = function () {
    //needs check to prevent bug 5.6.6 backwards logic
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
    input.length = 0;
    display.value = 0;
}
operations.clear.addEventListener('click', clear)