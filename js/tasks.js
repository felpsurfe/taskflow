const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let tasks = loadtasks();

function toggleTask(taskId) {
    const selectedTask = tasks.find((task) => task.id === taskId);

    if (!selectedTask) {
        return;
    }

    selectedTask.isCompleted = !selectedTask.isCompleted;

    saveTasks(tasks);

    renderTasks();

}

function renderTasks() {
    taskList.innerHTML = "";
    taskCount.innerText = '${tasks.length} ${tasks.length === 1 ? "tarefa" : "tarefas"}';

    if (tasks.length === 0) {
        const emptyState = document.createElement("div");
        const title = document.createElement("h3");
        const text = document.createElement("p");
        const link = document.createElement("a");

        emptyState.className = "empty-state";
        title.innerText = "Ainda não existem tarefas";
        text.innerText = "Cria uma tarefa para ver como os dados passam entre páginas.";
        link.className = "button button--small";
        link.href = "new-task.html";
        link.innerText = "Criar Tarefa";

        emptyState.appendChild(title);
        emptyState.appendChild(text);
        emptyState.appendChild(link);
        emptyState.appendChild(emptyState);
        return;

    }

    for (let task of tasks) {
        taskList.appendChild(createTaksCard(task));

    }
}

function createTaksCard(task) {
    const card = document.createElement("article");
    card.className = task.isCompleted
    ? "task-card task-card--completed"
    : "task-card";

    const content = document.createElement("div");
    const title = document.createElement("h3");
    const category = document.createElement("p");
    const button = document.createElement("button");

    title.innerText = task.title;
    category.innerText = 'Categoria: ${task.category}';
    button.className = "button button--ghost button--small";
    button.type = "button";
    button.innerText = task.isCompleted // terminar
    
    
    

}