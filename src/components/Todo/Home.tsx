import React, { useEffect, useState } from "react";
import HomeStyle from "./Home.style";
import TodoString from "./string.json";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import { PivotKeysEnum } from "./Types";
import TaskList from "./List/TaskList";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import AddTask from "./AddTask/AddTask";
import CompletedTask from "./Completed/CompletedTask";
initializeIcons();

const Home = () => {
  //State for Pivot and task
  const [tasks, setTasks] = useState([]);
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);


  return (
    <Stack className={HomeStyle.todoContainer}>
      <header className={HomeStyle.headerStyle}>
        {/*Using string from json */}
        <h2>{TodoString.header}</h2>
      </header>

      {
        //Pivot from fluentui for different tabs(tasks, form, completed)
      }
      <Stack className={HomeStyle.pivotContainer}>
        <Pivot
          selectedKey={String(selectedKey)}
          styles={{
            root: HomeStyle.pivotRoot,
          }}
          onLinkClick={(item?: PivotItem) => {
            setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks); //state asks for string so default value as tasks
          }}
        >
          <PivotItem
            headerText={TodoString.pivots.tasksTab}
            itemKey={PivotKeysEnum.Tasks}
          >
            {/* Pass the tasks as a prop to TaskList */}
            <TaskList />
          </PivotItem>
          <PivotItem
            headerText={TodoString.pivots.taskFormTab}
            itemKey={PivotKeysEnum.TaskForm}
          >
            <AddTask />
          </PivotItem>
          <PivotItem
            headerText={TodoString.pivots.CompletedTab}
            itemKey={PivotKeysEnum.Completed}
          >
            <CompletedTask />
          </PivotItem>
        </Pivot>
      </Stack>
    </Stack>
  );
};

export default Home;
