const { button } = require('./scaffold');

const data = { color: 'default', text: "title", action: { type: null } };

test('test behavior add funntion to scaffold', () => {
    scaffold = button(data);
    expect(scaffold).toMatch(/^FlatButton/);
    expect(scaffold).toMatch(/color: Colors.blue/);
    expect(scaffold).toMatch(/\/\*\.\.\.\*\//);
    expect(scaffold).toMatch(/\)$/);
});