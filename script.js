const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

// Calculate first and second value depend on operator
const calculate = {
  '/' : (firstNumber, secondNumber) => firstNumber / secondNumber,
 
  '*' : (firstNumber, secondNumber) => firstNumber * secondNumber,
 
  '+' : (firstNumber, secondNumber) => firstNumber + secondNumber,
 
  '-' : (firstNumber, secondNumber) => firstNumber - secondNumber,
  
  '=' : (firstNumber, secondNumber) => secondNumber,
 }
 
let firstValue = 0;
let operatorValue = '';
let awatingNextValue = false;

function sendNumberValue(number){
  // Replace current display value if first value is entered
  if(awatingNextValue === true){
    calculatorDisplay.textContent = number;
    awatingNextValue = false;
  } else {
  // if current display value is 0, then replace it, with number,else addNumber
  const displayNumber = calculatorDisplay.textContent;
  calculatorDisplay.textContent = displayNumber === '0' ? number : displayNumber + number;
}
}

function addDecimal(){
  // if operator is pressed, dont add decimal
  if(awatingNextValue === true) return;
  // if no decimal add one
  if(!calculatorDisplay.textContent.includes('.')){
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  } 
}


function userOperator(operator){
   const currentValue = Number(calculatorDisplay.textContent);
  // Prevent multipule operators
  if(operatorValue && awatingNextValue) {
    operatorValue = operator;
    return;
  }
  // Assign first value to current value only if first value dosent exist
  if(!firstValue){
    firstValue = currentValue;
  } else{
    // console.log(firstValue, operatorValue, currentValue);
    const calculation = calculate[operatorValue](firstValue,currentValue);
    firstValue = calculation;
    calculatorDisplay.textContent = calculation;
  //   console.log('calculation', calculation);
   }
  // Ready for next value, and store our operator
  awatingNextValue = true;
  operatorValue = operator;
}

// Reset all values, Display
function resetDisplay(){
  firstValue = 0; 
  operatorValue = "";
  awatingNextValue = false;
  calculatorDisplay.textContent = '0';
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

clearBtn.addEventListener('click', resetDisplay);
