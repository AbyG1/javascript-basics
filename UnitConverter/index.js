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
    footValue = Math.round(value * 3.281 * 1000)/1000
    meterValue = Math.round(value / 3.281 * 1000)/1000
}

function calculateVolume(value){
    literValue = Math.round(value * 0.264 * 1000)/1000
    gallonValue = Math.round(value / 0.264 * 1000)/1000
}

function calculateMass(value){
    kilogramValue = Math.round(value * 2.204 * 1000)/1000
    poundValue = Math.round(value /2.204 * 1000)/1000
}



   function render(value){
    
        lengthEl.textContent = `${value} meters = ${footValue} feet | ${value} feet = ${meterValue} meters `
        volumeEl.textContent = `${value} liters = ${gallonValue} gallons | ${value} gallons = ${literValue} liters`
        massEl.textContent = `${value} kilograms = ${poundValue} pounds | ${value} pounds = ${kilogramValue} kilograms`

   }