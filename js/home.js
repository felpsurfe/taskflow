const totalTaskCount = document.getElementById("totalTaskCount");
const pendingTaskCount = document.getElementById("pendingTaskCount");
const  completedTaskCount = document.getElementById("completedTaskCount");
const homeEmptyState = document.getElementById("homeEmptyState");

const tasks = loadTasks();
const completedTasks = tasks.filter((task) => task.isCompleted);
const pendingTasks = tasks.filter((task) => !task.isCompleted);

totalTaskCount.innerText = tasks.length;
pendingTaskCount.innerText = pendingTasks.length;
completedTasksCount.innerText = completedTasks.length;

homeEmptyState.hidden = tasks.length !== 0;