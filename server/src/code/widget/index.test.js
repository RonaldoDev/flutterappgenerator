const expectExport = require("expect");

const { buildWidgetsTree } = require('./index')

const components_mock = [
 { 
     layoutItem: { x: 0, y: 1 },
     component: { 
         color: 'colored',
         text: 'this is a text',
         type: 'button' 
        }
    }
];

test('Test build widget', () => {
    const widget = buildWidgetsTree(components_mock);
    expectExport(widget[0]).toMatch(/^Row/)
});