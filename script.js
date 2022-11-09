
let myLibrary = [];

class Book {
    constructor(author, title, numberOfPages, isRead) {
        this.author = author
        this.title = title
        this.numberOfPages = numberOfPages
        this.isRead = isRead
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const overlay = document.querySelector('.overlay')
const btn = document.querySelector('.add-button')
const bookDiv = document.querySelector('.book-cards')
const submitBtn = document.querySelector('.submitButton')
const author = document.querySelector('#author')
const title = document.querySelector('#title')
const numberOfPages = document.querySelector('#numberOfPages')
const isRead = document.querySelector('#isRead')
const bookCards = document.querySelector('.book-cards')
const submitForm = document.querySelector('.form-div')
const closeBtn = document.querySelector('.close')


submitBtn.addEventListener('click', (e) => {
    // Prevent refresh when submitting the form
    e.preventDefault()

    // Due preventDefault(), additional validation required.
    if (author.checkValidity() && title.checkValidity() && numberOfPages.checkValidity()) {
    }
    else {
        return
    }

    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == title.value) {
            return
        }
    }

    let newBook = new Book(author.value, title.value, numberOfPages.value, isRead.checked)
    myLibrary.push(newBook)

    removeAllChildNodes(bookCards)
    for (i = 0; i < myLibrary.length; i++) {
        let curDiv = document.createElement('div')
        curDiv.className = 'card'
        let currentAuthor = document.createElement('p')
        let currentTitle = document.createElement('p')
        let currentNumberOfPages = document.createElement('p')
        let removeButton = document.createElement('button')
        let readButton = document.createElement('button')
        removeButton.innerText = 'Remove'
        removeButton.id = myLibrary[i].title
        removeButton.className = 'removeButton'

        currentAuthor.textContent = myLibrary[i].author
        currentTitle.textContent = myLibrary[i].title
        currentNumberOfPages.textContent = myLibrary[i].numberOfPages < 9 ? `${myLibrary[i].numberOfPages} page ` : `${myLibrary[i].numberOfPages} pages`
        //currentIsRead.textContent = `Is it read: ${myLibrary[i].isRead == true ? 'Yes' : 'No'}`
        if (myLibrary[i].isRead == true) {
            readButton.innerText = 'Read'
            readButton.className = 'readStateButton'
            readButton.id = 'readButton'
        } else {
            readButton.innerText = 'Not Read'
            readButton.className = 'readStateButton'
            readButton.id = 'unreadButton'
        }


        curDiv.appendChild(currentAuthor)
        curDiv.appendChild(currentTitle)
        curDiv.appendChild(currentNumberOfPages)
        curDiv.appendChild(readButton)
        curDiv.appendChild(removeButton)


        bookCards.appendChild(curDiv)

        author.value = ''
        title.value = ''
        numberOfPages.value = ''
    }
})



btn.addEventListener('click', () => {
    submitForm.style.display = 'block'
    overlay.style.display = 'block'
})

document.addEventListener('click', (e) => {
    if (e.target.className == 'overlay') {
        submitForm.style.display = 'none'
        overlay.style.display = 'none'
    }
})

// Read-Unread Toggle Event
document.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.id == 'unreadButton') {
        e.target.id = 'readButton'
        e.target.textContent = 'Read'
    } else if (e.target.id == 'readButton') {
        e.target.id = 'unreadButton'
        e.target.textContent = 'Not Read'

    }
})

document.addEventListener('click', (e) => {
    if (e.target.className == 'removeButton') {
        let nameOfTitle = e.target.id
        for (i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].title != nameOfTitle) continue
            myLibrary.splice(i, 1)

            removeAllChildNodes(bookCards)
            for (i = 0; i < myLibrary.length; i++) {
                let curDiv = document.createElement('div')
                curDiv.className = 'card'
                let currentAuthor = document.createElement('p')
                let currentTitle = document.createElement('p')
                let currentNumberOfPages = document.createElement('p')
                let removeButton = document.createElement('button')
                let readButton = document.createElement('button')
                removeButton.innerText = 'Remove'
                removeButton.id = myLibrary[i].title
                removeButton.className = 'removeButton'

                currentAuthor.textContent = myLibrary[i].author
                currentTitle.textContent = myLibrary[i].title
                currentNumberOfPages.textContent = myLibrary[i].numberOfPages < 9 ? `${myLibrary[i].numberOfPages} page ` : `${myLibrary[i].numberOfPages} pages`
                //currentIsRead.textContent = `Is it read: ${myLibrary[i].isRead == true ? 'Yes' : 'No'}`
                if (myLibrary[i].isRead == true) {
                    readButton.innerText = 'Read'
                    readButton.className = 'readStateButton'
                    readButton.id = 'readButton'
                } else {
                    readButton.innerText = 'Not Read'
                    readButton.className = 'readStateButton'
                    readButton.id = 'unreadButton'
                }


                curDiv.appendChild(currentAuthor)
                curDiv.appendChild(currentTitle)
                curDiv.appendChild(currentNumberOfPages)
                curDiv.appendChild(readButton)
                curDiv.appendChild(removeButton)


                bookCards.appendChild(curDiv)

                author.value = ''
                title.value = ''
                numberOfPages.value = ''
            }
        }
    }
})