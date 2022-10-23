const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number){
  // if current display value is 0 then replace it with number,else addNumber
  const displayNumber = calculatorDisplay.textContent;
  calculatorDisplay.textContent = displayNumber === '0' ? number : displayNumber + number;
}

function addDecimal(){
  if(!calculatorDisplay.textContent.includes('.')){
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

// Add eventListner for num,op,dec buttons
inputBtns.forEach((inputBtn) =>{
  if(inputBtn.classList.length === 0){
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }else if(inputBtn.classList.contains('operator')){
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }else if(inputBtn.classList.contains('decimal')){
    inputBtn.addEventListener('click',addDecimal)
  }
});

// Reset Display
function resetDisplay(){
  calculatorDisplay.textContent = '0';
}

clearBtn.addEventListener('click',resetDisplay);
 