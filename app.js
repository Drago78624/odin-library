"use strict";

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("openModal");
const addBtn = document.getElementById("add-btn");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const readStatus = document.querySelector(".read-status");
const form = document.getElementById("form");
const booksContainer = document.querySelector(".books-container");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let myLibrary = [];

class Book  {
  constructor(_title, _author, _pages, _readStatus) {
    this.title = _title;
    this.author = _author;
    this.pages = _pages;
    this.readStatus = _readStatus;
  }
}

function addBookToLibrary(e) {
  e.preventDefault();
  let titleVal = title.value;
  let authorVal = author.value;
  let pagesVal = pages.value;
  let readStatusVal = readStatus.checked;
  if (titleVal && authorVal && pagesVal) {
    const newBook = new Book(titleVal, authorVal, pagesVal, readStatusVal);
    myLibrary.push(newBook);
    form.reset();
    modal.style.display = "none";
    showAddedBooks(myLibrary);
  }
}

function showAddedBooks(library) {
  booksContainer.innerHTML = "";
  for (let i = 0, length = library.length; i < length; i++) {
    const element = document.createElement("div")
    element.className = "book"
    element.setAttribute("data-id", library.indexOf(library[i]));
    let html = `
          <h2 class="book-name">${library[i].title.toUpperCase()}</h2>
          <h3 class="book-author">"${library[i].author}"</h3>
          <h4 class="book-pages">${library[i].pages}</h4>
          <button class="has-read-btn btn" id="status-change-btn">${
            library[i].readStatus ? "has read" : "not read yet"
          }</button>
          <button class="delete-btn btn" id="delete-btn">delete</button>
    `;
    element.innerHTML = html
    booksContainer.appendChild(element)
  }
}

document.addEventListener('click',function(e){
  if(e.target && e.target.id == 'delete-btn'){
        const newLibrary = myLibrary.filter((book, i)=>{
          return i != e.target.parentElement.dataset.id
        })
        myLibrary = newLibrary
        showAddedBooks(myLibrary)
   }
   if(e.target && e.target.id == 'status-change-btn'){
    let id = e.target.parentElement.dataset.id
    const newLibrary = myLibrary.map((book, i)=>{
      if(id == i){
        return {
          ...book,
          readStatus: !book.readStatus
        }
      }else {
        return book
      }
    })
    myLibrary = newLibrary
    showAddedBooks(myLibrary)
}
});

addBtn.addEventListener("click", addBookToLibrary);
