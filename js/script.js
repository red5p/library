let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? "read" : "not read yet"}`;
    };
}

function addBookToLibrary(title, author, pages, hasRead) {
    //take user’s input and store the new book objects into an array
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}

function showAllBooks() {
    //loops through the array and displays each book on the page. 
    //can display them in some sort of table, or each on their own “card”. 
    for (let i=0; i<myLibrary.length; i++) {
        // console.table(myLibrary[i]);
        const books = document.querySelector(".books");     
        const book = document.createElement("div");
        book.classList.add("book");
        const title = document.createElement("p");
        title.classList.add("title")
        const author =  document.createElement("p");
        const pages = document.createElement("p");
        const hasRead = document.createElement("p");
        
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        hasRead.textContent = myLibrary[i].hasRead;

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(hasRead);

        books.appendChild(book);
    }
}


addBookToLibrary("title1", "author1", "pages1", true);
addBookToLibrary("title2", "author2", "pages2", false);
addBookToLibrary("title3", "author3", "pages3", true);

addBookToLibrary("title1", "author1", "pages1", true);
addBookToLibrary("title2", "author2", "pages2", false);


addBookToLibrary("title3", "author3", "pages3", true);
addBookToLibrary("title1", "author1", "pages1", true);
addBookToLibrary("title2", "author2", "pages2", false);
addBookToLibrary("title3", "author3", "pages3", true);
addBookToLibrary("title1", "author1", "pages1", true);
addBookToLibrary("title2", "author2", "pages2", false);
addBookToLibrary("title3", "author3", "pages3", true);

showAllBooks();

const formContainer = document.querySelector(".formContainer");
const cancel = document.querySelector("#cancel");
const newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.onclick = () => {
    formContainer.classList.add("show");
}
cancel.onclick = () => {
    formContainer.classList.remove("show");
}