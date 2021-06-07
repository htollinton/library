let myLibrary = [];

//object constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        if (this.read) {
            return `I have read it`;
        } else {
            return `I have not read it`;
        };
    };
};

//getting the button elements
let submit = document.getElementById("submit");
let titleValue = document.getElementById("title");
let authorValue = document.getElementById("author");
let pagesValue = document.getElementById("num-pages");
//have they read the book?
function radioValue() {
    let ele = document.getElementsByName("read");
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            if (ele[i].value == "no") {
                return false;
            } else if (ele[i].value == "yes") {
                return true;
            };
        };
    };
};

function trueOrFalse(a,b){
    if(myLibrary[a].read){
        myLibrary[a].read = false;
        b.textContent = myLibrary[a].info();
    } else{
        myLibrary[a].read = true;
        b.textContent = myLibrary[a].info();
    };
};

//delete and reset display of books

function deleter(a) {
    let div = [];
    myLibrary.splice(a, 1);
    document.getElementById("shelf").textContent = "Books: ";
    const shelf = document.getElementById("shelf");
    for (i = 0; i < myLibrary.length; i++) {
        (function (i) {

            div[i] = document.createElement("div");
            let nameOfBook = document.createElement("h1");
            nameOfBook.textContent = myLibrary[i].title;
            let nameOfAuthor = document.createElement("h2");
            nameOfAuthor.textContent = "Author: " + myLibrary[i].author;
            let numberOfPages = document.createElement("h3");
            numberOfPages.textContent = "Length: " + myLibrary[i].pages + " pages";
            let haveIRead = document.createElement("h3");
            let remove = document.createElement("button");
            remove.textContent = "delete";
            let finishedIt = document.createElement("button");
            finishedIt.textContent = "Finished it!";

            haveIRead.textContent = myLibrary[i].info();
            div[i].classList.add("book");
            div[i].setAttribute("name", `${i}`);
            shelf.appendChild(div[i]);
            div[i].appendChild(nameOfBook);
            div[i].appendChild(nameOfAuthor)
            div[i].appendChild(numberOfPages);
            div[i].appendChild(haveIRead);
            div[i].appendChild(remove);
            div[i].appendChild(finishedIt);
            remove.addEventListener("click", () => deleter(i), false);
            finishedIt.addEventListener("click",function(){
                trueOrFalse(i,haveIRead);        
            })
        }(i))

    };
};


//function to add books to my library
function addBookToLibrary(title, author, pages, read) {
    let count = myLibrary.length + 1;
    let newBook = [];

    newBook[count] = new book(title, author, pages, read);
    myLibrary.push(newBook[count]);
    let div = [];
    div[count - 1] = document.createElement("div");
    let nameOfBook = document.createElement("h1");
    nameOfBook.textContent = title;
    let nameOfAuthor = document.createElement("h2");
    nameOfAuthor.textContent = "Author: " + author;
    let numberOfPages = document.createElement("h3");
    numberOfPages.textContent = "Length: " + pages + " pages";
    let haveIRead = document.createElement("h3");
    let remove = document.createElement("button");
    remove.textContent = "delete";
    let finishedIt = document.createElement("button");
    finishedIt.textContent = "Finished it!";


    haveIRead.textContent = myLibrary[count - 1].info();
    div[count - 1].classList.add("book");
    div[count - 1].setAttribute("name", `${count - 1}`);
    shelf.appendChild(div[count - 1]);
    div[count - 1].appendChild(nameOfBook);
    div[count - 1].appendChild(nameOfAuthor)
    div[count - 1].appendChild(numberOfPages);
    div[count - 1].appendChild(haveIRead);
    div[count - 1].appendChild(remove);
    div[count - 1].appendChild(finishedIt);
    remove.addEventListener("click", () => deleter(count - 1));
    finishedIt.addEventListener("click",function(){
        trueOrFalse(count-1,haveIRead);
    });
};

//when they click add trigger addbooktolibrary:
submit.addEventListener("click", () => addBookToLibrary(titleValue.value, authorValue.value, pagesValue.value, radioValue()));





//example books:
addBookToLibrary("lotr", "tolkein", 100, true);
addBookToLibrary("harry potter", "tolkein", 200, true);
addBookToLibrary("the hobit", "tolkein", 300, true);
addBookToLibrary("jungle book", "tolkein", 400, true);
addBookToLibrary("jungle book", "tolkein", 500, false);



//display form to add a new book when click on add a new book
function display() {
    if (document.getElementById("add").style.display === "block") {
        document.getElementById("add").style.display = "none";
        document.getElementById("display").textContent = "Add a new book";

    } else {
        document.getElementById("add").style.display = "block";
        document.getElementById("display").textContent = "Cancel";
    };
};



