const input = document.querySelector("input")
let items = document.querySelector("#list-item")
input.addEventListener("keyup",(e)=>{
    if(e.key=="Enter")
    {
        addToDo(input.value)
            input.value=""
    }
});
const addToDo = (item)=>{
    if(item=="")
    {}
    else
    {
        let list = document.createElement("li");
        list.innerHTML=`${item}
        <i class="ri-delete-bin-5-fill"></i>
        `
        items.appendChild(list);

        list.addEventListener("click",function(){
            this.classList.toggle("done");
        })
        list.querySelector("i").addEventListener("click",(e)=>{
            list.remove();
        })
    }
};

