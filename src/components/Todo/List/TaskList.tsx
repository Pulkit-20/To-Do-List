import React, { useEffect, useState } from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox, FontIcon, Stack, mergeStyles } from "@fluentui/react";
import { ITask, getTasksFromLocalStorage } from "../LocalStorageUtil";

interface TaskListProps {
  tasks: ITask[];

}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const onRenderCell = (task: ITask) => {
    return task.checked !== true ?(
        <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
          <Stack horizontal style={{width: "90%"}}>
              <Checkbox checked={task.checked || false} />
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
