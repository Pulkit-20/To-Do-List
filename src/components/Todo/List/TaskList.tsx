import React from "react";
import TaskListStyle from "./TaskList.style";
import { Checkbox } from "@fluentui/react";

interface ITask {
  id: string;
  title: string;
}
const TaskList = () => {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Task 1",
    },
    {
      id: "2",
      title: "Task 2",
    },
  ];
  const onRenderCell = (task: ITask) => {
    return (
      <div key={task.id} className={TaskListStyle.taskItem}>
        <Checkbox />
        {task.title}
      </div>
    );
  };
  return <div>{tasks.map(onRenderCell)}</div>;
};

export default TaskList;
