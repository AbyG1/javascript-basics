/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const valueEl = document.getElementById('input-box')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')


const buttonEl = document.getElementById('btn')
buttonEl.addEventListener('click',() => {
    let inputValue = valueEl.value
    calculatelength(inputValue)
})

function calculatelength(value){
    let footValue = value * 3.281
    footValue = Math.round(footValue * 1000)/1000
    let meterValue = value/3.281
    meterValue = Math.round(meterValue * 1000)/1000
    render(footValue, meterValue)
   }


   function render(value1,value2){
        let inputValue = valueEl.value
        lengthEl.textContent = `${inputValue} meters = ${value1} feet | ${inputValue} feet = ${value2} meters `
   }