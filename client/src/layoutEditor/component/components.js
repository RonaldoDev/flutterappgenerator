
let id = 0
export default (item) => {
    switch(item) {
        case 'check':
            return { i: `${++id}`, x: 0, y: 1, w: 1, h: 1, isResizable: false}
        case 'text':
            return { i: `${++id}`, x: 0, y: 1, w: 4, h: 1, minW: 2, maxW: 4, maxH: 1, minH: 1}
        case 'button':
            return { i: `${++id}`, x: 0, y: 1, w: 2, h: 1, minW: 2, maxW: 4, maxH: 1}
        case 'appbar':
            return { i: `${++id}`, x: 0, y: 0, w: 4, h: 1, static: true, isDraggable: false, isResizable: false }
        case 'select':
            return { i: `${++id}`, x: 0, y: 1, w: 4, h: 1, isResizable: false }
        default:
            return null;
    }
}