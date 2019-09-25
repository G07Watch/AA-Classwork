
let toDosArr;

if (!JSON.parse(localStorage.getItem("JSONtodo"))) {
  toDosArr = [];
} else {
    toDosArr = JSON.parse(localStorage.getItem("JSONtodo"));
}

// debugger
function addToDo (target, list, input){
    target[0].addEventListener("submit", event => {
        event.preventDefault();
        let toDoObj = {value: input[0].value, done: false};
        toDosArr.push(toDoObj);
        let toDoStr = JSON.stringify(toDosArr); 
        localStorage.setItem("JSONtodo", toDoStr);
        input[0].value = "";
        let JSONarr = JSON.parse(localStorage.getItem("JSONtodo"));
        // debugger;
        populateList(JSONarr); 
        toDosArr = [];
      })
}

function populateList (todos){
    todos.map( obj =>{
        let task = document.createElement("label");
        let checkbox = document.createElement("INPUT");
        checkbox.type = 'checkbox'
        let list = document.createElement("li");
        task.innerHTML = obj.value;
        list.appendChild(checkbox);
        list.appendChild(task); // wrap label and checkbox in list element
        toDoList.appendChild(list);
         debugger;
    })

}

const toDoForm = document.getElementsByClassName("add-todo-form");
const toDoList = document.querySelector(".todos");
const todoIn = document.getElementsByName("add-todo");
addToDo(toDoForm, toDoList, todoIn);

export default addToDo;





// JSON.parse(localStorage.getItem('user'));