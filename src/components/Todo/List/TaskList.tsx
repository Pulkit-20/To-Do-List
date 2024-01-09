import React, { useEffect, useState } from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack, mergeStyles } from "@fluentui/react";
import { ITask, getTasksFromLocalStorage, saveTasksToLocalStorage } from "../LocalStorageUtil";

interface TaskListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const handleCheckboxChange = (index: number ) => {
    const updateTasks = [...tasks];
    updateTasks[index].checked = true;
    saveTasksToLocalStorage(updateTasks);
    setTasks(updateTasks);
  }

  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);
  useEffect(() => {
    const filtered = tasks.filter((task) => !task.checked);
    setFilteredTasks(filtered);

  }, [tasks]);

  return (
    <div>
      {filteredTasks.map((task, index) =>(
        <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
              <Stack horizontal style={{width: "90%"}}>
                  <Checkbox onChange={() => handleCheckboxChange(index)} />
                  {task.title}
              </Stack>

              <Stack horizontal style={{width: "10%"}}>
                  <FontIcon iconName="info" className={TaskListStyle.iconStyle} />
                  <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
                  <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
              </Stack>

            </Stack>

      ))}
    </div>
  );
};

export default TaskList;
