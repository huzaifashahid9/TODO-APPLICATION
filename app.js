var inputNote = document.querySelector("#input-box");
var parent = document.querySelector("#parent");
//console.log(parent);





function deleteHandler(ele) {
    //console.log(ele.parentNode);
    ele.parentNode.parentNode.remove();
}





function editHandler(ele){
    //console.log(ele.parentnode.parentnode);
    const editing = prompt("Edit Your List");
    ele.parentNode.parentNode.firstChild.textContent = editing ;
}






function addNote() {

    //   console.log("addNote()", inputNote.value);
    if (inputNote.value.length < 3) {
      alert("Enter correct notes...");
      return;
    }

    const UI = `<div class="box" role="alert">
         ${inputNote.value}
          <div>
              <i onclick="editHandler(this)" class="fa-solid btn fa-pen-to-square"></i>
              <i onclick="deleteHandler(this)" class="fa-solid btn fa-trash"></i>
          </div>
        </div>`;
    //console.log("UI", UI);
    parent.innerHTML += UI;
    inputNote.value = "   ";
  }


