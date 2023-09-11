const myLibrary = [];
const libraryContainer = document.getElementById('library');

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = (title, author, pages, hasRead) =>{
        return title + ' by ' + author + ', ' + pages + ' pages, ' + hasRead;
    }
}

function createCard(book){
  
}

function displayLibrary(){
  for(book in myLibrary){
    console.log('book');
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = 'hi';
    libraryContainer.appendChild(card);
  }
}

function addBookToLibrary(){

}

const book1 = new Book('hi', 'hi', 100, true);
myLibrary.push(book1);

displayLibrary();