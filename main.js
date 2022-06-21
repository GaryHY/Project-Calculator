let currentNumber = "";
let previousNumber = "";
let sign = "";

const previousDisplayNumber = document.querySelector('.previousNumber');
const currentDisplayNumber = document.querySelector('.currentNumber');

const numberButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

/*L'idée c'est d'entrer des nombres (avec peut-être des décimales) puis un opérateur puis à nouveau des nombres (avec 
    peut-être des décimales) et enfin d'apuyer sur égal.

*/
//L'ensemble des listeners que j'utilise.
operatorsListener();
clearListener();
equalListener();
numberListener();
decimalListener();

function numberListener(){
    numberButtons.forEach(numberButton => {
        numberButton.addEventListener("click", e => {
            if(currentDisplayNumber.textContent.length <= 12){
                if(currentDisplayNumber.textContent == 0){
                    console.log(e.target.textContent);
                    currentDisplayNumber.textContent = e.target.textContent;
                    currentNumber = e.target.textContent;
                } else {
                    console.log(e.target.textContent);
                    currentDisplayNumber.textContent += e.target.textContent;
                    currentNumber += e.target.textContent;
                }
            }
            else {
                alert("Vous ne pouvez pas ajouter plus de chiffres, désolé !")
            }
        });
    });
}

function decimalListener(){
    decimal.addEventListener("click", e=>{
        if(currentDisplayNumber.textContent.length > 0 && currentDisplayNumber.textContent.slice(-1) !== "."){
            currentDisplayNumber.textContent += '.';
            currentNumber+='.';
        } else {
            //Pour le moment on traitera le cas comme ça. Plus tard ça deviendra un 0. ....
            alert("Vous ne pouvez pas ajouter de décimale")
        }
    });
}

function operatorsListener(){
    operators.forEach(operateur => {
        operateur.addEventListener("click", e => {
            console.log(e.target.textContent);
            sign = e.target.textContent;
            previousNumber = currentNumber;
            currentNumber = "";
            previousDisplayNumber.textContent = currentDisplayNumber.textContent;
            currentDisplayNumber.textContent = "";    
        });
    });
}

function clearListener(){
    clear.addEventListener("click", ()=>{
        //Change quelque chose 
        console.log("On a clean la calculatrice");
        clearCalculator();
    });
}
function equalListener(){
    equal.addEventListener("click", ()=> {
        //Attention à l'ordre, certains opérations en sont pas commutatives comme la division. 
        console.log(`ici on va sommer ${previousNumber} et ${currentNumber} : `)
        console.log("L'operateur est : ", sign);
        console.log("Le résultat de l'opération est : ", operate(sign, previousNumber, currentNumber));
        //Ces deux trucs là c'est pour après...
        //operate(String(e.target.textContent), currentNumber, previousNumber);
        //console.log("On test operate : ", operate(e.target.textContent, 3, 4));
        previousDisplayNumber.textContent =  "";
        currentDisplayNumber.textContent =  operate(sign, previousNumber, currentNumber);
        clearVariables();
        console.log("On vérfie si j'ai bien clear", previousNumber, currentNumber);
    });
}

function clearCalculator(){
    currentNumber = ""; 
    previousNumber = "";
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = "0";
}

function clearVariables(){
    currentNumber = ""; 
    previousNumber = "";
    sign = "";
}

function operate(operator, a, b){
    if(operator === "+"){
        return add(Number(a),Number(b));
    }
    if(operator === "-"){
        return substract(Number(a),Number(b));
    }
    if(operator === "x"){
        return multiply(Number(a),Number(b));
    }
    if(operator === "/"){
        return divide(Number(a),Number(b));
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