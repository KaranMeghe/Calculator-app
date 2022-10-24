const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let operatorValue = 0;
let awatingNextValue = false;

function sendNumberValue(number){
  // Replace current display value if first value is entered
  if(awatingNextValue === true){
    calculatorDisplay.textContent = number;
    awatingNextValue = false;
  } else {
    // if current display value is 0 then replace it with number,else addNumber
  const displayNumber = calculatorDisplay.textContent;
  calculatorDisplay.textContent = displayNumber === '0' ? number : displayNumber + number;
}
}

function addDecimal(){
  // if operator is pressed add no decimal
  if(awatingNextValue) return;
  // if no decimal add one
  if(!calculatorDisplay.textContent.includes('.')){
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  } 
}

function userOperator(operator){
   const currentValue = Number(calculatorDisplay.textContent);
  // Assign first value to current value only if first value dosent exist
  if(!firstValue){
    firstValue = currentValue;
  } else{
    console.log('cv', currentValue);
  }
  // Ready for next value, store our operator
  awatingNextValue = true;
  operatorValue = operator;
  console.log('opv', operatorValue);
  console.log('fv',firstValue);
}

// Add eventListner for num,op,dec buttons
inputBtns.forEach((inputBtn) =>{
  if(inputBtn.classList.length === 0){
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  }else if(inputBtn.classList.contains('operator')){
    inputBtn.addEventListener('click', () => userOperator(inputBtn.value));
  }else if(inputBtn.classList.contains('decimal')){
    inputBtn.addEventListener('click',addDecimal)
  }
});

// Reset all values Display
function resetDisplay(){
  firstValue = 0;
  operatorValue = "";
  awatingNextValue = false;
  calculatorDisplay.textContent = '0';
}

clearBtn.addEventListener('click', resetDisplay);
