const myLibrary = [];
const libraryContainer = document.getElementById('library');
let form = document.getElementById('addBookForm');

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = (title, author, pages, hasRead) =>{
        return title + ' by ' + author + ', ' + pages + ' pages, ' + hasRead;
    }
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

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let hasRead = document.getElementById('read').checked;

  console.log(hasRead);

  const book = new Book(title, author, pages, hasRead);
  addBookToLibrary(book);

  form.reset();
});

function createCard(book){
  const card = document.createElement('div');
  card.className = 'card';

  const close = document.createElement('span');
  close.innerHTML = '&times;';

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

  card.append(close, bookTitle, bookAuthor, pageNum, readStatus);
  return card;

}

function addBookToLibrary(book){
  myLibrary.push(book);
  let newBook = createCard(book);
  libraryContainer.appendChild(newBook);
}

