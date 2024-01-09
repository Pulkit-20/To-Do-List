import { Checkbox, FontIcon, Stack } from "@fluentui/react";
import React, { useEffect, useState } from "react";
import TaskListStyle from "../List/TaskList.style";
import { ITask, saveTasksToLocalStorage } from "../LocalStorageUtil";
import { PivotKeysEnum } from "../Types";

interface TaskListProps {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    setSelectedKey: React.Dispatch<React.SetStateAction<string>>;
    setTaskToEdit: React.Dispatch<React.SetStateAction<ITask | null>>;
  }
const CompletedTask:React.FC<TaskListProps> = ({tasks, setTasks, setSelectedKey, setTaskToEdit }) => {
    const handleCheckboxChange = (id: string ) => {
        const updateTasks = tasks.map((task) =>
          task.id === id ? { ...task, checked: false} : task
        );

        saveTasksToLocalStorage(updateTasks);
        setTasks(updateTasks);
    }
    const handleDeleteTask = ( id:string ) => {
      const updateTasks = tasks.filter((task) => task.id !== id);
      saveTasksToLocalStorage(updateTasks);
      setTasks(updateTasks);
    }
    const handleEditTask = (id: string) => {
      const taskToEdit = tasks.find((task) => task.id === id);
      if( taskToEdit ){
        setTaskToEdit(taskToEdit);
        setSelectedKey(PivotKeysEnum.TaskForm);
      }
    }  
    const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);
    useEffect(() => {
        const filtered = tasks.filter((task) => task.checked);
        setFilteredTasks(filtered);
    
      }, [tasks]);
  return (
    <div>
      {filteredTasks.map((task, index) => (
        <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
          <Stack horizontal style={{ width: "90%" }}>
            <Checkbox checked onChange={() => handleCheckboxChange(task.id)} />
            {task.title}
          </Stack>

          <Stack horizontal style={{ width: "10%" }}>
            <FontIcon iconName="info" className={TaskListStyle.iconStyle} />
            <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} onClick ={() => handleEditTask(task.id)}/>
            <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} onClick={() => handleDeleteTask(task.id)} />
          </Stack>
        </Stack>
      ))}
    </div>
  );
};

export default CompletedTask;
