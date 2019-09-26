const { getAction } = require('./behaviors');

let data = { type: 'navigate', value: "this is a function" }

test('test behavior add funntion to scaffold', () =>{
    scaffold = getAction(data)
    expect(scaffold).toMatch(/^Navigator.push/);
    expect(scaffold).toMatch(/\(.+?\)/);
    expect(scaffold).toMatch(/this is a function/);
    expect(scaffold).toMatch(/\);$/);
});

test('test no behavior', () =>{
    data = { type: null, value: "this is a function" }
    scaffold = getAction(data)
    expect(scaffold).toMatch("/*...*/");
});