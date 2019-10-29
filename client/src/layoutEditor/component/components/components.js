
export default (id, item) => {
    switch(item) {
        case 'checkBox':
            return { i: `${++id}`, x: 0, y: 1, w: 4, h: 1, isResizable: false}
        case 'textField':
            return { i: `${++id}`, x: 0, y: 1, w: 4, h: 1, minW: 2, maxW: 4, maxH: 1, minH: 1}
        case 'text':
            return { i: `${++id}`, x: 0, y: 1, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1, minH: 1}
        case 'button':
            return { i: `${++id}`, x: 0, y: 1, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1}
        case 'iconButton':
            return { i: `${++id}`, x: 0, y: 1, w: 1, h: 1, minW: 1, maxW: 4, maxH: 1}
        case 'appbar':
            return { i: `${++id}`, x: 0, y: 0, w: 4, h: 1, static: true, isDraggable: false, isResizable: false }
        case 'select':
            return { i: `${++id}`, x: 0, y: 1, w: 4, h: 1, isResizable: false }
        default:
            return null;
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