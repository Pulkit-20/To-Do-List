export const LocalTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
};
export const saveTasksFromLocalStorage = (tasks: any) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}