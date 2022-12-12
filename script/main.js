

let span = document.getElementById('calc')
let display = document.getElementById('display')
let buttons = document.querySelectorAll('.get-value')

const mode = document.querySelector('.dark_mode')
const html = document.querySelector('html')
const valueDefault = '0'
const displayMaxLength = 9

function setDefaultValueOnDisplay() {
    display.value = valueDefault
    span.innerHTML = valueDefault
}
function solveCalc() {
    let splitCalc = display.value.split('')
    let filterOperation = splitCalc.filter(operator => operator === '*' || operator === '/' || operator === '+' || operator === '-') 
    if(filterOperation.length >= 1){
        let calc = display.value
        let result = eval(calc)
        span.innerHTML = `${calc}=`
        display.value = result
    } 
}
function percentageCalc() {
    display.value /= 100 
}
function setDate() {
    let spanTime = document.getElementById('time')
    let date = new Date()
    let hourAndMinutes = `${date.getHours()}:${date.getMinutes()}`
    spanTime.innerText = hourAndMinutes
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let targetValue = e.target.value
        let displayLength = display.value.length + 1

        if(targetValue === '.' && displayLength < displayMaxLength) {
            display.value += targetValue
        } 
        else if(display.value === valueDefault && displayLength < displayMaxLength) {
            display.value = ''
            display.value += targetValue
        } 
        else if(displayLength <= displayMaxLength) {
            display.value += targetValue
        }
    })
})
mode.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
})
setDate()    
 