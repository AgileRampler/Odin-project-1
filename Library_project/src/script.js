const myLibrary = [];

function Book(title,author,pages,read) {
 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;


}

function addBookToLibrary() {
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value  
    let read = document.getElementById("read").checked

    newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
  render()
}



function render(){
  let LibraryBook =document.querySelector("#library")
  LibraryBook.innerHTML=""

  for(let i=0 ;i < myLibrary.length ; i++){

  
    let book = myLibrary[i]
    let bookEl =document.createElement("div")
    bookEl.setAttribute("id","library")
   

    bookEl.innerHTML=` <div class=book-card >
    <h1>${book.title}<h1>
    <h2>${book.author}</h2>
    
    
    <p>${book.pages}</p>
    <p>  ${book.read ? "Read" : "Not Read"} </p>
    
    <button class="remove-btn" onclick="removeButton(${i})">Remove <button>
    </div>
    
`
    
    LibraryBook.appendChild(bookEl)
    
  }

  

}

function removeButton(index){
  myLibrary.splice(index,1)
  render()

}


  const newBookbtn = document.getElementById("newbook-btn")


  newBookbtn.addEventListener("click", function(){
    
  let newBookform= document.getElementById("book-form")
    
    newBookform.style.display="block"
  })
function empty(){
  document.getElementById("title").value =""
  document.getElementById("author").value =""
  document.getElementById("pages").value =""
  document.getElementById("read").checked =""


}

  document.getElementById("book-form").addEventListener("submit",function(event){

   
    event.preventDefault()
    addBookToLibrary()
    empty()
    
})