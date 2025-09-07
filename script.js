let tasks=[];
const taskinput = document.getElementById("Taskinput");
const Addbtn = document.getElementById("addbtn");
const taskList = document.getElementById("tasklist");

Addbtn.addEventListener("click", () => {
    const tasktext = taskinput.value;
    if(tasktext!==""){
        tasks.push(tasktext);
        taskinput.value="";
    }
})

function renderTasks(){
    taskList.innerHTML="";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const delbtn = document.createElement("button");
        delbtn.textContent = "Delete";
        delbtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        li.appendChild(delbtn);
        taskList.appendChild(li);
    });
}