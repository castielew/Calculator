const display = document.getElementById("display");
const buttons = document.querySelectorAll(".numbers button");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const BackSpace=document.getElementById("BackSpace")
let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value==="=")
        return;
    if (value==="C")
    {
        currentInput='';
        display.value='';
        return;
    }
   
    currentInput+=value;
    display.value=currentInput;
   
  });
});

BackSpace.addEventListener('click', () => {
    currentInput = currentInput.substring(0, currentInput.length - 3);
    display.value = currentInput;
  });

equalsButton.addEventListener("click",
    ()=>{
        if(isValidExpression(currentInput)){
            const result=eval(currentInput)
            display.value=result;
        }
        else{
            alert("false!!")
            display.value=''
        }
    }
)


function isValidExpression(expression) {
  const validPattern = /^[+-]?([0-9]+(\.[0-9]+)?([+\-*/][0-9]+(\.[0-9]+)?)*)*$/;
  return validPattern.test(expression);
}
clearButton.addEventListener("click",()=>{
    display.value=''
})
