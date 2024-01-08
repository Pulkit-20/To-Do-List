import React, { useEffect, useState } from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack, mergeStyles } from "@fluentui/react";
import { ITask, getTasksFromLocalStorage } from "../LocalStorageUtil";

interface TaskListProps {
  tasks: ITask[];
}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [taskList, setTasksList] = useState<ITask[]>([]);
  useEffect( () =>{
    setTasksList(tasks);
  }, [tasks])
  const onRenderCell = (task: ITask) => {
    return (
      <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
        <Stack horizontal style={{width: "90%"}}>
            <Checkbox />
            {task.title}
        </Stack>

        <Stack horizontal style={{width: "10%"}}>
            <FontIcon iconName="info" className={TaskListStyle.iconStyle} />
            <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
            <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
        </Stack>

      </Stack>
    );
  };
  return <div>{taskList.map(onRenderCell)}</div>;
};

export default TaskList;
