
export default (id, item, position) => {
    const id_axis = id++;
    switch(item) {
        case 'checkBox':
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, isResizable: false}
        case 'textField':
<<<<<<< Updated upstream
            return { i: `${++id}`, x: 0, y: 1, w: 4, h: 1, minW: 2, maxW: 4, maxH: 1, minH: 1}
        case 'text':
            return { i: `${++id}`, x: 0, y: 1, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1, minH: 1}
=======
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, minW: 2, maxW: 4, maxH: 1, minH: 1}
>>>>>>> Stashed changes
        case 'button':
            return { i: `${id_axis}`, x: 0, y: position, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1}
        case 'iconButton':
            return { i: `${id_axis}`, x: 0, y: position, w: 1, h: 1, minW: 1, maxW: 4, maxH: 1}
        case 'appbar':
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, static: true, isDraggable: false, isResizable: false }
        case 'select':
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, isResizable: false }
        default:
            return { i: `${id_axis}` };
    }
}

export const widget = (id, componentType, icon=null) => ({
    color: "primary",
    text: "default",
    theme: "primary",
    textColor: "black",
    fontSize: 12,
    cssClass: "",
    icon: icon,
    id: id,
    hasAction: componentType === "button",
    action: { type: "", value: "" }
    
});