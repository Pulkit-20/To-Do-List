import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";


interface ITaskListStyle {
    taskItem : IStyle;
    iconStyle : IStyle;
}
const TaskListStyle: IProcessedStyleSet<ITaskListStyle> = mergeStyleSets({
    taskItem: { 
        maxHeight: 50,
        minHeight: 30,
        padding: 10,
        color: "black",
        width: "100%",
        backgroundColor: "cadetblue",
        selectors: {
            "&:hover": { background: "lightsteelblue" },
        },
        margin: 5,
        display: "flex",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    },
    iconStyle: {
    fontSize: 20,
    margin: '0 3px',
    selectors: {
        "&:hover": { cursor: "pointer" }
    }
    }
});

export default TaskListStyle;