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
  const card = document.createElement('div');

  const bookTitle = document.createElement('h2');
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement('h3');
  bookAuthor.textContent = book.author;

  const pageNum = document.createElement('p');
  pageNum.textContent = book.pages;

  const readStatus = document.createElement('button');
  if(book.hasRead){
    readStatus.className = 'read';
    readStatus.textContent = 'Read';
  }else{
    readStatus.className = 'not_read';
    readStatus.textContent = 'Not Read';
  }

  card.append(bookTitle, bookAuthor, pageNum, readStatus);
  return card;

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

/*const book1 = new Book('hi', 'hi', 100, true);
myLibrary.push(book1);*/

displayLibrary();