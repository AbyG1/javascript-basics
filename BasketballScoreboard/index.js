let homeScore = 0;
let guestScore = 0;

let homeEl = document.getElementById('home-score')
let guestEl = document.getElementById('guest-score')

function addOneToHome() {
    homeScore++
    render()
}

function addTwoToHome() {
    homeScore += 2
    render()
}

function addThreeToHome() {
    homeScore += 3
    render()
}

function addOneToGuest() {
    guestScore++
    render()
}

function addTwoToGuest() {
    guestScore += 2
    render()
}

function addThreeToGuest() {
    guestScore += 3
    render()
}

function resetScore(){
    homeScore = 0
    guestScore = 0
    render()
}

function render(){
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}