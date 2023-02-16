class Storage{

    static addListToStorage(newList){
        let list = this.getListFromStorage();
        list.push(newList);
        localStorage.setItem("list",JSON.stringify(list));
    };

    static getListFromStorage(){
       let list;
       if(localStorage.getItem("list") === null){
            list = [];
       }
       else {
            list = JSON.parse(localStorage.getItem("list"));
       }

       return list;
    };

    static deleteListFromStorage(listTitle){
        let lists = this.getListFromStorage();
        lists.forEach(function(list,index){
            if(list.need === listTitle){
                lists.splice(index,1); 
            }
        });
        localStorage.setItem("list",JSON.stringify(lists));
    };
    static deleteAllListFromStorage(){
        localStorage.removeItem("list");
    }
};