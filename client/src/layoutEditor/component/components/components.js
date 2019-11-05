
export default (id, item, position) => {
    const id_axis = id++;
    switch(item) {
        case 'checkBox':
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, isResizable: false}
        case 'textField':
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, minW: 2, maxW: 4, maxH: 1, minH: 1}
        case 'text':
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, minW: 2, maxW: 4, maxH: 1, minH: 1}
        case 'button':
            return { i: `${id_axis}`, x: 0, y: position, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1}
        case 'iconButton':
            return { i: `${id_axis}`, x: 0, y: position, w: 2, h: 1, minW: 1, maxW: 4, maxH: 1}
        case 'appbar':
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, static: true, isDraggable: false, isResizable: false }
        case 'select':
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 1, isResizable: false }
        default:
            return { i: `${id_axis}`, x: 0, y: position, w: 4, h: 10, static: true };
    }
}

export const widget = (id, componentType) => ({
    color: "primary",
    text: "default",
    theme: "primary",
    textColor: "black",
    fontSize: 12,
    cssClass: "",
    icon: "add",
    id: id,
    hasAction: componentType === "button",
    action: { type: "", value: "" },
    type: componentType,
    items: [
        { key: 1, label: "one" },
        { key: 2, label: "two" },
        { key: 3, label: "three" }
    ],
    keyboardType: "Alphabetical",
    website: ""
});