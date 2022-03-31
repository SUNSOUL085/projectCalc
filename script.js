
const numbers = document.querySelectorAll(".number");

const calculatorScreen = document.querySelector('.calculator-screen')

let prevNum = "";
let calculationOperator = '';
let curentNumber = "0";

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(curentNumber)
    })
})

const inputNumber = (number) => {
    if(curentNumber === '0'){
        curentNumber = number
    }else {
        curentNumber += number
    }
}
const operators = document.querySelectorAll('.operator')
const inputOperator = (operator)=>{
    if(calculationOperator === ''){

        prevNum = curentNumber
    }
    calculationOperator = operator
    curentNumber = "0"
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        // console.log(event.target.value)
        
    })
})
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener("click",()=>{
    calculate()
    updateScreen(curentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+" :
            result =parseFloat(prevNum)  + parseFloat(curentNumber) 
            break
        case "-" :
            result = parseFloat(prevNum)  - parseFloat(curentNumber) 
            break
        case "*" :
            result =parseFloat(prevNum)  * parseFloat(curentNumber) 
            break
        case "/" :
            result =parseFloat(prevNum)  / parseFloat(curentNumber) 
            break
        default :
            return
    }
    curentNumber = result
    calculationOperator = ""
}
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(curentNumber)
})
const clearAll = ()=>{
    prevNum = ''
    calculationOperator = ''
    curentNumber = '0'
}
const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if(curentNumber.includes('.')){
        return
    }
    curentNumber += dot
}

decimal.addEventListener('click', (event)=> {
    inputDecimal(event.target.value)
    updateScreen(curentNumber)
})