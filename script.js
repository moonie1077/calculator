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
  switch(operator) {
    case "+": return add(a,b); break;
    case '-': return subtract(a,b); break;
    case '*': return multiply(a,b); break;
    case '/': return divide(a,b); break;
  }
}

function highlightButton(e) {
console.log(e);
console.log(e.target.dataset.key);
const key=document.querySelector(`.clickable[data-key="${e.target.dataset.key}"]`);
console.log(key)
key.classList.add('highlight');
}


//const key = document.querySelector('.key[data-key="$e.')}
function highlightButtonRemove(e){
const key=document.querySelector(`.clickable[data-key="${e.target.dataset.key}"]`);
key.classList.remove('highlight');
}


const keys = document.querySelectorAll('.number, .operand');
keys.forEach(key => { key.addEventListener('mouseup', highlightButtonRemove);
                      key.addEventListener('mousedown', highlightButton);
                     }
             )