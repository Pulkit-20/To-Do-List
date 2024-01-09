import React, { useEffect, useState } from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack, mergeStyles } from "@fluentui/react";
import { ITask, getTasksFromLocalStorage } from "../LocalStorageUtil";

interface TaskListProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const handleCheckboxChange = (index: number ) => {
    tasks[index].checked = true;
    setTasks(tasks);
  }
  const onRenderCell = (task: ITask, index: number) => {
    console.log(index);
    return task.checked !== true ?(
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
    ): null;
  };
  return <div>{tasks.map(onRenderCell)}</div>;
};

export default TaskList;
