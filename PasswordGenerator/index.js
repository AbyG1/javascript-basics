const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const button = document.getElementById('btn')
const inputOne = document.getElementById('box1')
const inputTwo = document.getElementById('box2')


let password1 = ''
let password2 = ''
let passwordLength = 15;

function randomCharacter() {
    const index = (Math.floor(Math.random() * characters.length))
    return characters[index]
}

function genartePassword(){
    for(let i = 0; i < passwordLength; i++){
        password1 += randomCharacter()
    }

    for(let i = 0; i < passwordLength; i++){
        password2 += randomCharacter()
    }
    
}

function renderPassword(){
   
    genartePassword()
    inputOne.value = password1
    inputTwo.value = password2

    password1=''
    password2=''
    
}