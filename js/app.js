
let formulaire = document.querySelector("form");
let addButton = document.querySelector(".addButton");
let toDoList = document.querySelector(".ToDoListContainer");
let inputValue = document.querySelector("#inputTask");
let loader = document.querySelector(".loader");


function loading () {
    loader.classList.add("loadingAnimation") 
}
setTimeout(loading,500) 


addButton.addEventListener("click", (e)=> {
    e.preventDefault();

    const task = document.createElement("div");
    task.classList.add("div");
    task.innerHTML = 
    `   
        <div class="toDo">
            <p class="widthToDo">${inputValue.value}</p>
            <div class="buttons">
                <button class="validButton"><i class="fa-solid fa-check"></i></button>
                <button class="trashButton"><i class="fa-regular fa-trash-can"></i></button>
            </div> 
        </div>  
    `

    toDoList.appendChild(task);

    inputValue.value = "";

    const validButton = task.querySelector(".validButton");
    validButton.addEventListener("click", () => {
        const styleValidTask = task.querySelector(".widthToDo");
        styleValidTask.style.backgroundColor = "#8d99ae";
        styleValidTask.style.textDecoration = "line-through";
    });

    const removeButton = task.querySelector(".trashButton");
    removeButton.addEventListener("click", ()=> {
        task.classList.add("styleRemoveTask");

        function removeTask () {
            task.remove();
        }

        setInterval(removeTask, 500)
    })
})

