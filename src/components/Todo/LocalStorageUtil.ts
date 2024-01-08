export const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
};
export const saveTasksToLocalStorage = (task: any) => {
    const storedTasks = getTasksFromLocalStorage();
    const updatedTasks = [...storedTasks, task];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}