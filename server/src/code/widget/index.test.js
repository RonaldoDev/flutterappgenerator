const expectExport = require("expect");

const { buildWidgets } = require('./index')

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
    const widget = buildWidgets(components_mock);
    console.log(widget[0])
    expectExport(widget[0]).toMatch(/^Row/)
});