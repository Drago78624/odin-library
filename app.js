"use strict";

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("openModal");
const addBtn = document.getElementById("add-btn");
const title = document.querySelector(".title")
const author = document.querySelector(".author")
const pages = document.querySelector(".pages")
const readStatus = document.querySelector(".read-status")
const form = document.getElementById("form")
const booksContainer = document.querySelector(".books-container")

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  this.changeReadStatus = function(){
    this.readStatus = !this.readStatus
  }
}

function addBookToLibrary(e) {
  e.preventDefault();
  let titleVal = title.value
  let authorVal = author.value
  let pagesVal = pages.value
  let readStatusVal = readStatus.checked
  if(titleVal && authorVal && pagesVal){
    const newBook = new Book(titleVal, authorVal, pagesVal, readStatusVal)
    myLibrary.push(newBook)
    form.reset()
    modal.style.display = "none";
    showAddedBooks()
  }
  console.log(myLibrary);
}

function showAddedBooks(){
  
}


addBtn.addEventListener("click", addBookToLibrary)