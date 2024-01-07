import { IProcessedStyleSet, IStyle, mergeStyleSets } from "@fluentui/react";

interface IHomeStyle {
    todoContainer : IStyle;
    headerStyle : IStyle;
    pivotRoot: IStyle;
    lineIsSelected: IStyle;
}

const HomeStyle: IProcessedStyleSet<IHomeStyle> = mergeStyleSets({
    todoContainer : {
        width: "50%",
        height: "80%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
    },
    headerStyle : {
        height: 80,
        backgroundColor: "cadetblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    },
    pivotRoot: {
        display: "flex",
        justifyContent: "center"
    },
    lineIsSelected: {
        color: "cadetBlue"
    }
})

export default HomeStyle;