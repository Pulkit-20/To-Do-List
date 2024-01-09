import {
  MessageBar,
  MessageBarType,
  Pivot,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import React, { useState } from "react";
import { ITask, getTasksFromLocalStorage, saveTasksToLocalStorage } from "../LocalStorageUtil";
import { PivotKeysEnum } from "../Types";

interface AddTaskProps {
    tasks: ITask[];
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    setSelectedKey: React.Dispatch<React.SetStateAction<string>>;
    taskToEdit?: ITask | null;
    setTaskToEdit: React.Dispatch<React.SetStateAction<ITask | null>>;
}
const AddTask: React.FC<AddTaskProps> = ({ tasks, setTasks, setSelectedKey, taskToEdit, setTaskToEdit }) => {
    const [title, setTitle] = useState(taskToEdit?.title || "");
    const [description, setDescription] = useState(taskToEdit?.description || "");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showUpdateMessage, setShowUpdateMessage] = useState(false);

    const handleAddTask = () =>{
        if (taskToEdit && title.trim() !== ""){
            setShowUpdateMessage(true);
            setShowErrorMessage(false);
            setShowSuccessMessage(false);
            const updatedTasks = tasks.map((task) =>
                task.id === taskToEdit.id ? {...task, title, description } : task
            );
            //Saving to Local Storage
            saveTasksToLocalStorage(updatedTasks);

            setTasks(updatedTasks);

            setTitle("");
            setDescription("");
            setTimeout(() => {
                setShowUpdateMessage(false);
                setSelectedKey(PivotKeysEnum.Tasks);
            }, 2000);
        }
        else if(title.trim() !== ""){
            setShowUpdateMessage(false);
            setShowErrorMessage(false);
            setShowSuccessMessage(true);
            const checked = false;
            const newTask: ITask ={
                id: String(Date.now()),
                title,
                description,
                checked,
            }
            const updatedTask= [...tasks, newTask]
            //Saving to Local Storage
            saveTasksToLocalStorage(updatedTask);

            setTasks(updatedTask);

            setTitle("");
            setDescription("");

            setTimeout(() => {
                setShowSuccessMessage(false);
                setSelectedKey(PivotKeysEnum.Tasks);
            }, 2000);
        }
        else{
            setShowUpdateMessage(false);
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
            
            setTimeout(() =>{ 
                setShowErrorMessage(false);
            }, 3000);
        }
        setTaskToEdit(null);
    }
    return (
        <Stack>
            <TextField label="Title" value={title} onChange={(e, newValue) => setTitle(newValue || "")} required />
            <TextField label="Description" value={description} onChange={(e, newValue) => setDescription(newValue || "")} multiline rows={4} />
            <Stack horizontal tokens={ { childrenGap : 20 } } style={{ marginTop : 20 }}>
                <Stack style={{width: "20%"}}>
                    {taskToEdit && 
                    <PrimaryButton text="Update Task" onClick={handleAddTask} />
                    }
                    {!taskToEdit &&
                    <PrimaryButton text="Add Task" onClick={handleAddTask} />
                    }
                </Stack>
                {showSuccessMessage && (
                    <Stack style={{width: "80%"}}>
                    <MessageBar messageBarType={MessageBarType.success}>
                        Task Added, Opening Tasks Tab
                    </MessageBar>
                    </Stack>
                )}
                {showErrorMessage && (
                    <Stack style={{width: "80%"}}>
                    <MessageBar messageBarType={MessageBarType.error} isMultiline={false} dismissButtonAriaLabel="Close"> 
                        Title is required
                    </MessageBar>
                    </Stack>
                )}
                {showUpdateMessage && (
                    <Stack style={{width: "80%"}}>
                    <MessageBar messageBarType={MessageBarType.success}>
                        Task Updated, Opening Tasks Tab
                    </MessageBar>
                    </Stack>
                )}
            </Stack>
        </Stack>
    );
};

export default AddTask;
