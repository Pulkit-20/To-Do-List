import React, { useState } from 'react';
import HomeStyle from "./Home.style"
import TodoString from "./string.json"
import { Label, Pivot, PivotItem } from '@fluentui/react';
import { PivotKeysEnum } from './Types';

const Home = () => {

    //State for Pivot
    const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks)

    return <div className={HomeStyle.todoContainer}>
        <header className={HomeStyle.headerStyle}>
            {/*Using string from json */}
            <h2>{TodoString.header}</h2>
        </header>

        {//Pivot from fluentui for different tabs(tasks, form, completed)
}
        <Pivot 
            selectedKey={String(selectedKey)} 
            styles={{ 
                    root: HomeStyle.pivotRoot
                }}
            onLinkClick={(item?: PivotItem) =>{
                setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks) //state asks for string so default value as tasks
            }}
            >
        <PivotItem headerText={TodoString.pivots.tasksTab} itemKey={PivotKeysEnum.Tasks}> 
          <Label>Pivot #1</Label>
        </PivotItem>
        <PivotItem headerText={TodoString.pivots.taskFormTab} itemKey={PivotKeysEnum.TaskForm}>
          <Label>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText={TodoString.pivots.CompletedTab} itemKey={PivotKeysEnum.Completed}>
          <Label>Pivot #3</Label>
        </PivotItem>
      </Pivot>
    </div>
};

export default Home;