// javascript
const btnEl = document.getElementById('btn')
const endorsementContainer = document.getElementById('endorsements')
const userCommentEl = document.getElementById('comment')


btnEl.addEventListener('click',() => {
    const userInputText = userCommentEl.value
    const endorsementEl = document.createElement('div')
    endorsementEl.classList.add('endo-comments');
    endorsementEl.textContent = userInputText
    if(endorsementContainer.firstChild){
        endorsementContainer.insertBefore(endorsementEl, endorsementContainer.firstChild)
    }
    else {
        endorsementContainer.appendChild(endorsementEl)
            
    }
    clearTextBox()
})

function clearTextBox() {
    userCommentEl.value = ''
}

