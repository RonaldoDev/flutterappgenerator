export const getPositionsToRenders = store => {
    let positions = [
        { y:0, x:0 },
        { y:1, x:0 },
        { y:2, x:0 },
        { y:3, x:0 },
        { y:4, x:0 },
        { y:5, x:0 },
        { y:6, x:0 },
        { y:7, x:0 },
        { y:8, x:0 },
        { y:9, x:0 },
    ];
    store.component.currentTab.components.forEach(element => {       
        positions = positions.reduce((sum, elem) => {
            const lineWidth =  elem.x + element.layoutItem.w
            if (lineWidth <= 4) {
                sum.push({ ...elem, x: lineWidth})
            }
            return sum;
        }, []);
    });
    return positions;
}