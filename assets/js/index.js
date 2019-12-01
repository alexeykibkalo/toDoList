"use strict";
const tasks = [];
const toDoListContainer = document.getElementsByClassName("toDoListContainer");
toDoListContainer[0].classList.add("taskLIstContainer");
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addTask);
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearInputArea);


function addTask(){
    const taskList = document.getElementById("taskList");
    taskList.prepend(createTaskListItem());
    clearInputArea();

}

function createTaskListItem() {
    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");
    taskItem.id = tasks.length;
    taskItem.append(createCheckBox());
    taskItem.append(createTaskDescription());
    return taskItem;
}

function createCheckBox() {
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("taskid", tasks.length);
    checkBox.addEventListener("change", completeTask);
    return checkBox;
}

function createTaskDescription(){
    const inputArea = document.getElementById("inputTaskArea");
    tasks[tasks.length] = {"id": tasks.length, "description": inputArea.value, "isComplet" : false};
    const taskDescription = document.createElement("span");
    taskDescription.classList.add("taskDescription");
    taskDescription.innerText = inputArea.value;
    return taskDescription;
}

function clearInputArea(){
    const inputArea = document.getElementById("inputTaskArea");
    inputArea.value = "";
}
function completeTask(){
    const taskId = this.attributes.taskid.nodeValue;
    const completeTask = document.getElementById(taskId);
    tasks[taskId].isComplet = true;
    completeTask.classList.add("completeTask")
}
