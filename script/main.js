

let span = document.getElementById('calc')
let display = document.getElementById('display')
let buttons = document.querySelectorAll('.get-value')

const mode = document.querySelector('.dark_mode')
const html = document.querySelector('html')
const valueDefault = '0'
const displayMaxLength = 9

function setDefalutValueOnDisplay() {
    display.value = valueDefault
    span.innerHTML = '0'
}
function solveCalc() {
    let calc = display.value
    let result = eval(calc)
    span.innerHTML = `${calc}=`
    display.value = result
}
function percentageCalc() {
    let x = display.value
    let calc = x / 100
    display.value = calc
}
function setDate() {
    let spanTime = document.getElementById('time')
    let date = new Date()
    let hourAndMinutes = `${date.getHours()}:${date.getMinutes()}`
    spanTime.innerText = hourAndMinutes
}

buttons.forEach(button => {
    button.addEventListener('click', e => {
        let displayLength = display.value.length + 1

        if(e.target.value === ',' && displayLength < displayMaxLength) {
            display.value += e.target.value
        } 
        else if(display.value === valueDefault && displayLength < displayMaxLength) {
            display.value = ''
            display.value += e.target.value
        } 
        else if(displayLength <= displayMaxLength) {
            display.value += e.target.value
        }
    })
})
mode.addEventListener('click', () => {
    html.classList.toggle('dark-mode')
})
setDate()    
 