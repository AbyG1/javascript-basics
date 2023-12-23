// javascript
import { initializeApp } from'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
import { getDatabase,ref,push } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js'

const appSettings = {
    databaseURL: "https://endorsements-database-e84b7-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const app = initializeApp(appSettings)

const database = getDatabase(app)

const endorsementlistInDB = ref(database, "Endorsements") 



const publishBtn = document.getElementById('btn')
const endorsementContainer = document.getElementById('endorsements')
const userCommentEl = document.getElementById('comment')


publishBtn.addEventListener('click',() => {
    
    const userInputText = userCommentEl.value
    if(userInputText.trim() != ''){
        push(endorsementlistInDB,userInputText)
        clearTextBox()
    } else {
        alert('Enter something')
    }
})


// const endorsementEl = document.createElement('div')
//     endorsementEl.classList.add('endo-comments');
//     endorsementEl.textContent = userInputText
//     if(endorsementContainer.firstChild){
//         endorsementContainer.insertBefore(endorsementEl, endorsementContainer.firstChild)
//     }
//     else {
//         endorsementContainer.appendChild(endorsementEl)
            
//     }
   



function clearTextBox() {
    userCommentEl.value = ''
}

