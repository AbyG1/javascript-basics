// javascript
import { initializeApp } from'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
import { getDatabase,ref,push,onValue } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js'

const appSettings = {
    databaseURL: "https://endorsements-database-e84b7-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)

const database = getDatabase(app)

const endorsementlistInDB = ref(database, "Endorsements") 



const publishBtn = document.getElementById('btn')
const endorsementContainer = document.getElementById('endorsements')
const userCommentEl = document.getElementById('comment')
const endorsementEl = document.createElement('div')




publishBtn.addEventListener('click',() => {
    
    const userInputText = userCommentEl.value
    if(userInputText.trim() != ''){
        push(endorsementlistInDB,userInputText)
        clearTextBox()
    } else {
        alert('Enter something')
    }
})

onValue(endorsementlistInDB,(snapshot) =>  {

    if(snapshot.exists()){
        
        let endorsementArray = Object.entries(snapshot.val())
        endorsementEl.innerHTML = ""

           for(let i = 0; i < endorsementArray.length; i++){
                let currentItem = endorsementArray[i]
                let currentItemId = currentItem[0]
                let currentItemValue = currentItem[1]
           
                displayEndorsement(currentItemValue)
           }
          

    }
           
           
        
    })




function displayEndorsement(value){

    const para = document.createElement('p')

    
    para.classList.add('endo-comments');
    para.textContent = value 
    endorsementEl.appendChild(para)
    if(endorsementContainer.firstChild){
        endorsementContainer.insertBefore(endorsementEl, endorsementContainer.firstChild)
    }
    else {
        endorsementContainer.appendChild(endorsementEl)
            
    }




}







function clearTextBox() {
    userCommentEl.value = ''
}

