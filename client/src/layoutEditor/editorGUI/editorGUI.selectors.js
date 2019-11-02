

export const getComponentsToRender = store => store.component.currentTab.components;

export const getSelectedComponent = store => store.component.currentTab.selectedComponent;

export const getPositionsToRenders = store => {
    let positions = [0,1,2,3,4,5,6,7,8,9];
    store.component.currentTab.components.forEach(element => {       
        positions = positions.filter(f => f !== element.layoutItem.y)
    });
    return positions;
}