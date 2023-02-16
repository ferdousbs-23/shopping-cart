const form = document.getElementById("list-form");
const inputNeed = document.querySelector("#need");
const inputCount = document.querySelector("#count");
const container = document.querySelector(".container-sm");
const clear = document.querySelector("#clear");


evenListeners();

function evenListeners(e) {
    form.addEventListener("submit",addList);
    document.addEventListener("DOMContentLoaded",function(){
        let list = Storage.getListFromStorage();
        UI.loadAllList(list);
    });

    container.addEventListener("click",deleteList);
    clear.addEventListener("click",deleteListAll);
};

function addList(e) {
    const need = inputNeed.value;
    const count = inputCount.value;
    if(need === "" || count === ""){
        UI.displayMessages("Danger message...!","danger");
    }
        const newList = new List(need, count);
        UI.addListToUI(newList);
        Storage.addListToStorage(newList);
        UI.displayMessages("Success message...","success");

        UI.clearInputs(inputNeed,inputCount);
        
        e.preventDefault();
}

function deleteList(e) {
    if(e.target.id === "exampleCheck1"){
        UI.deleteListFromUI(e.target);
        Storage.deleteListFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Success message...","success");
    }
};
function deleteListAll(){
    if(confirm("Sure?")){
        UI.clearAllFilmsFromUI();
        Storage.deleteAllListFromStorage();
        UI.displayMessages("Success message...","success");
    }
};