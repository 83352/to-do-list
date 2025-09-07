let tasks=[];
const taskinput = document.getElementById("Taskinput");
const Addbtn = document.getElementById("addbtn");
const taskList = document.getElementById("tasklist");
const togglebtn = document.getElementById("togglebtn");
const cleanbtn = document.getElementById("cleanbtn");

cleanbtn.addEventListener("click", ()=>{
    tasks=[];
    taskList.innerHTML="";
    renderTasks();
}

togglebtn.addEventListener("click", ()=>{
    const body = document.body;
    body.classList.toggle("dark");
    togglebtn.textContent = body.classList.contains("dark")?"Light":"Dark";
    togglebtn.classList.toggle("darkbtn");
})

Addbtn.addEventListener("click", ()=>{
    const tasktext = taskinput.value;
    if(tasktext!==""){
        tasks.push(tasktext);
        taskinput.value="";
        renderTasks();
    }
})

function renderTasks(){
    taskList.innerHTML="";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const action = document.createElement('div' );
        action.classList
        const delbtn = document.createElement("button");
        delbtn.textContent = "Delete";
        delbtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        const completed = document.createElement("button");
        completed.typeContent = task.completed? "Undo":"Completed";
        completed.addEventListener("click", () => {
            task.completed = !task.completed;
            renderTasks();
        });
        li.appendChild(delbtn);
        li.appendChild(completed);
        taskList.appendChild(li);
    });
}

taskinput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        Addbtn.click();
    }
});