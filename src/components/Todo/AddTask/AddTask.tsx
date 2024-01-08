import {
  MessageBar,
  MessageBarType,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import React, { useState } from "react";
import { saveTasksFromLocalStorage } from "../LocalStorageUtil";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleAddTask = () =>{
        if(title.trim() !== ""){
            setShowErrorMessage(false);
            setTitle("");
            setDescription("");
            setShowSuccessMessage(true);

            //Saving to Local Storage
            saveTasksFromLocalStorage({ title, description });

            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        }
        else{
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
            
            setTimeout(() =>{ 
                setShowErrorMessage(false);
            }, 3000);
        }
    }
    return (
        <Stack>
            <TextField label="Title" value={title} onChange={(e, newValue) => setTitle(newValue || "")} required />
            <TextField label="Description" value={description} onChange={(e, newValue) => setDescription(newValue || "")} multiline rows={4} />
            <Stack horizontal tokens={ { childrenGap : 20 } } style={{ marginTop : 20 }}>
                <Stack style={{width: "20%"}}>
                    <PrimaryButton text="Add Task" onClick={handleAddTask} />
                </Stack>
                {showSuccessMessage && (
                    <Stack style={{width: "80%"}}>
                    <MessageBar messageBarType={MessageBarType.success}>
                        Task Added
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
            </Stack>
        </Stack>
    );
};

export default AddTask;
