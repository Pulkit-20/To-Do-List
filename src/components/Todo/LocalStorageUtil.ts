export interface ITask {
    id: string;
    title: string;
    description: string;
}
export const getTasksFromLocalStorage = (): ITask[] => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
};
export const saveTasksToLocalStorage = (tasks: ITask[]): void => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}