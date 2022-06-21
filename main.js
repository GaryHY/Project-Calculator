const btns = document.querySelectorAll('button');
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');
const previousNumber = document.querySelector('.previousNumber');
const currentNumber = document.querySelector('.currentNumber');

/*
btns.forEach(btn => btn.addEventListener("click", e => {
    if(previousNumber.textContent.length<=6 || currentNumber.textContent.length<=6)
    console.log("liste de classe", e.target.classList);
    console.log("text content", e.target.textContent);
    currentNumber.textContent += `${e.target.textContent}`;
    console.log("currentNumber.textContent", currentNumber.textContent)

}));
*/
//console.log(operate("+",3,9));

function operate(operator, a, b){
    if(operator === "+"){
        return add(a,b);
    }
    if(operator === "-"){
        return substract(a,b);
    }
    if(operator === "x"){
        return multiply(a,b);
    }
    if(operator === "/"){
        return divide(a,b);
    }
}

function add(a, b){
    return a+b;
}
function substract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}

