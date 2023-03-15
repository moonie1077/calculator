function add(a,b) {return a + b};

function subtract(a, b) {return a-b};

function multiply(a,b) {return a*b}

function divide(a,b) {
  let result = a/b;
  return (String(result).indexOf('.') === -1
  ? result
  : +parseFloat(result.toFixed(8-String(result).indexOf('.')))
   );
//The return is to allow for truncation of a long decimal
}

function operate(a,b,operator) {
 // if (a.isNaN || b.isNan) {reset(); return};
  switch(operator) {
    case "+": return add(a,b); break;
    case '-': return subtract(a,b); break;
    case '*': return multiply(a,b); break;
    case '/': return divide(a,b); break;
  }
}

function highlightButton(e) {
const key=document.querySelector(`.clickable[data-key="${e.target.dataset.key}"]`);
key.classList.add('highlight');
//clearDisplay === 1? () => {readout.textContent = ""; clearDisplay = 0}:{};
if (clearDisplay == 1)
    {readout.textContent = "";
     clearDisplay = 0
     if (numberOne == "" && key.classList.contains('operand')) {reset(); return};
     };


if (key.classList.contains('decimal') &&
    readout.textContent.indexOf(".")!==-1) {return} //accounts for potential multiple decimals

if (key.classList.contains('operand')) {

    if (numberOne == ""){//first number is blank
        operation = e.target.dataset.key;
        numberOne = +readout.textContent;
        clearDisplay = 1;
        return;
        }
    else {  //equal has been hit, finalize calculation
        numberTwo = +readout.textContent;
        if (e.target.dataset.key == "=") {
           readout.textContent = +operate(numberOne, numberTwo, operation);
           reset();
           return;
            }
        else { //second number has been put in and calc continues.
        numberOne = +operate(numberOne, numberTwo, operation);
        operation = e.target.dataset.key;
        readout.textContent = numberOne;
        clearDisplay = 1;
        return;}
        }
}
readout.textContent += e.target.dataset.key;  //adds addl non-operand keys to display
}

function reset(type){
            numberOne = "";
            numberTwo = "";
            operation = "";
            clearDisplay = 1;
}

function highlightButtonRemove(e){
const key=document.querySelector(`.clickable[data-key="${e.target.dataset.key}"]`);
key.classList.remove('highlight');
}
//End of functions
//main page initialize
const readout = document.querySelector('.display');
let numberOne = "";
let numberTwo = "";
let clearDisplay = "";
let operation = "";

const keys = document.querySelectorAll('.clickable');
keys.forEach(key => { key.addEventListener('mouseup', highlightButtonRemove);
                      key.addEventListener('mousedown', highlightButton);
                     })