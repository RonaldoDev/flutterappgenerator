

export const getComponentsToRender = store => store.component.currentTab.components;

export const getSelectedComponent = store => store.component.currentTab.selectedComponent;

export const getPositionsToRenders = store => {
    let positions = [0,1,2,3,4,5,6,7,8,9];
    for (let index = 0; index < store.component.currentTab.components.length; index++) {
        const element = store.component.currentTab.components[index];
        if (element.layoutItem.h == 10) {
            return [];
        }
        positions = positions.filter(f => f !== element.layoutItem.y);
    }
    return positions;
}