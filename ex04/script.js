const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    listItem.addEventListener("click", function () {
        listItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();

        listItem.remove();

        totalTasks--;
        taskCount.textContent = totalTasks;
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    totalTasks++;
    taskCount.textContent = totalTasks;

    taskInput.value = "";
}
addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
