

const notesContainer    =   document.querySelector(".notes-container");
const createBtn    =   document.querySelector(".btn");

let notes   =   document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML    =   localStorage.getItem('notes');
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox    =   document.createElement('p');
    let img =   document.createElement('img');
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src =   "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
})


notesContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
        
    }
    else if(e.target.tagName ==="P"){
        notes   =   document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup =   function(){
                updateStorage();
            }   
        })
    }
    

})

// notesContainer.addEventListener("input", updateStorage);

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})








// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");

// function showNotes() {
//     notesContainer.innerHTML = localStorage.getItem('notes') || ""; // Load saved notes or set to empty if none
// }
// showNotes();

// function updateStorage() {
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }

// createBtn.addEventListener("click", () => {
//     let inputBox = document.createElement('p');
//     let img = document.createElement('img');
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "images/delete.png";
//     img.className = "delete-icon";
//     inputBox.appendChild(img);
//     notesContainer.appendChild(inputBox);
//     updateStorage(); // Save notes immediately after adding a new note
// });

// notesContainer.addEventListener("click", function(e) {
//     if (e.target.tagName === "IMG") {
//         e.target.parentElement.remove();
//         updateStorage(); // Save notes immediately after deleting a note
//     }
// });

// // Update storage as notes are edited
// notesContainer.addEventListener("input", updateStorage);

// // Prevent "Enter" key from creating a new paragraph, add a line break instead
// document.addEventListener("keydown", event => {
//     if (event.key === "Enter") {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// });
