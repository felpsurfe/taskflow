const TASKS_STORAGE_KEY = "taskFlowTasks";


function loadtasks() {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);

    if (storedTasks === null) {
        return [];
    }
    try {
        const parsedTasks = JSON.parse(storedTasks);
    } catch (error) {
        console.error("Não foi possivel ler as tarefas");
    }

    return [];
}