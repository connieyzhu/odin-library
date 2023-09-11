const myLibrary = [];

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = (title, author, pages, hasRead) =>{
        return title + ' by ' + author + ', ' + pages + ' pages, ' + hasRead;
    }
}

function addBookToLibrary(){
  
}