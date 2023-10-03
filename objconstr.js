const myLibrary = [];
const cardLibrary = [];
const libraryContainer = document.getElementById('library');
let form = document.getElementById('addBookForm');
let spanID = 0;

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = (title, author, pages, hasRead) =>{
        return title + ' by ' + author + ', ' + pages + ' pages, ' + hasRead;
    }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let hasRead = document.getElementById('read').checked;

  const book = new Book(title, author, pages, hasRead);
  addBookToLibrary(book);

  form.reset();
});

function createCard(book){
  const card = document.createElement('div');
  card.className = 'card';

  spanID++;
  const close = document.createElement('span'); 
  close.className = 'close';
  close.setAttribute('id', `${spanID}`)
  close.setAttribute('onclick', 'deleteBook(this); return false;')
  close.innerHTML = '&times;';

  const bookTitle = document.createElement('h2');
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement('h3');
  bookAuthor.textContent = 'By: ' + book.author;

  const pageNum = document.createElement('p');
  pageNum.textContent = book.pages + ' pgs';

  const readStatus = document.createElement('button');
  if(book.hasRead){
    readStatus.className = 'read';
    readStatus.textContent = 'Read';
  }else{
    readStatus.className = 'not_read';
    readStatus.textContent = 'Not Read';
  }

  readStatus.setAttribute('onclick', 'changeReadStatus(this); return false;')

  card.append(close, bookTitle, bookAuthor, pageNum, readStatus);
  cardLibrary.push(card);
  return card;

}

function addBookToLibrary(book){
  myLibrary.push(book);
  let newBook = createCard(book);
  libraryContainer.appendChild(newBook);
}

function deleteBook(btn){
  let nodeList = document.querySelectorAll('.card');
  let btnNodeList = btn.parentNode;
  let index;
  console.log(btn.id);
  for(i = 0; i < cardLibrary.length; i++){
    if(cardLibrary[i].firstChild.id == btn.id){
      index = i;
    }
  }
  btn.parentNode.remove();
  cardLibrary.splice(index, 1);
  myLibrary.splice(index, 1);
}

function changeReadStatus(btn){
  if(btn.className == 'read'){
    btn.className = 'not_read';
    btn.textContent = 'Not Read';
  }else{
    btn.className = 'read';
    btn.textContent = 'Read';
  }
}

const book1 = new Book ('num1', 'aut1', 123, true);
const book2 = new Book ('num2', 'aut2', 124, false);
addBookToLibrary(book1);
addBookToLibrary(book2);