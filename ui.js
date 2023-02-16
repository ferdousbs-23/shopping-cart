class UI{
    static addListToUI(newList){
        const list = document.getElementById("list");

        list.innerHTML += `
        <tr>
            <td>${newList.need}</td>
            <td>${newList.count}</td>
            <td>
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" >Check me out</label>
            </td>
          </tr>
        
        `
    };
    static deleteListFromUI(element){
        element.parentElement.parentElement.childNodes[1].style.textDecorationLine = "line-through";
    };
    static clearAllFilmsFromUI(){
        const list = document.getElementById("list");
        while(list.firstElementChild !== null){
            list.firstElementChild.remove();
        }
    };
    static loadAllList(list){

        const Lista = document.getElementById("list");

        list.forEach(function(lists){
            Lista.innerHTML += `
            <tr>
            <td>${lists.need}</td>
            <td>${lists.count}</td>
            <td>
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" >Check to delete</label>
            </td>
            </tr>
            `;
        });
    };
    static clearInputs(element1,element2){
        element1.value = "";
        element2.value = "";
    };
   
    static displayMessages (message,type){
    const cardbody = document.querySelector(".card-body");


    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardbody.appendChild(div);

    setTimeout(function(){
        div.remove();
        
    },1500);

    };

};