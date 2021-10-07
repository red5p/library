let myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead === "yes" ? "read" : "not read yet"}`;
    };
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
    addBookToPage(newBook);
}

function showAllBooks() {
    for (let i=0; i<myLibrary.length; i++) {
        addBookToPage(myLibrary[i]);
    }
}

function addBookToPage(newBook) {
    const books = document.querySelector(".books");     
    const book = document.createElement("div");
    book.classList.add("book");
    const title = document.createElement("p");
    title.classList.add("title")
    const author =  document.createElement("p");
    const pages = document.createElement("p");
    const hasRead = document.createElement("p");
    
    title.textContent = newBook.title;
    author.textContent = newBook.author;
    pages.textContent = newBook.pages;
    hasRead.textContent = newBook.hasRead;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(hasRead);

    books.appendChild(book);
}


showAllBooks();

const formContainer = document.querySelector(".formContainer");
const cancel = document.querySelector("#cancel");
const newBookBtn = document.querySelector("#newBookBtn");
const submit = document.querySelector("#submit");
const newBookTitle = document.querySelector(".form #title");
const newBookAuthor = document.querySelector(".form #author");
const newBookPages = document.querySelector(".form #pages");

newBookBtn.onclick = () => {
    formContainer.classList.add("show");
}
cancel.onclick = () => {
    formContainer.classList.remove("show");
}
submit.onclick = () => {
    const newTitle = newBookTitle.value;
    const newAuthor = newBookAuthor.value;
    const newPages = newBookPages.value;
    const newRead = document.querySelector('.form input[name="read"]:checked').value;
    addBookToLibrary(newTitle, newAuthor, newPages, newRead);
    formContainer.classList.remove("show");
}