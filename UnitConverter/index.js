/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueEl = document.getElementById('input-box')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')
let footValue
let meterValue
let literValue
let gallonValue
let kilogramValue
let poundValue


const buttonEl = document.getElementById('btn')
buttonEl.addEventListener('click',() => {
    let inputValue = valueEl.value
    calculatelength(inputValue)
    calculateVolume(inputValue)
    calculateMass(inputValue)
    render(inputValue)
})

function calculatelength(value){
    footValue = (value * 3.281).toFixed(3)
    meterValue = (value / 3.281).toFixed(3)
}

function calculateVolume(value){
    literValue = (value / 0.264).toFixed(3)
    gallonValue = (value * 0.264).toFixed(3)
}

function calculateMass(value){
    kilogramValue = (value / 2.204).toFixed(3)
    poundValue = (value * 2.204).toFixed(3)
}



   function render(value){
    
        lengthEl.textContent = `${value} meters = ${footValue} feet | ${value} feet = ${meterValue} meters `
        volumeEl.textContent = `${value} liters = ${gallonValue} gallons | ${value} gallons = ${literValue} liters`
        massEl.textContent = `${value} kilograms = ${poundValue} pounds | ${value} pounds = ${kilogramValue} kilograms`

   }