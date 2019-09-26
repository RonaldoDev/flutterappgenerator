const { sortByVerticalAxis } = require('./dataProcessing');

const data = [
    { id: 2, layoutItem: { y: 2 } },
    { id: 1, layoutItem: { y: 1 } },
    { id: 3, layoutItem: { y: 3 } },
]

test('Expect to return ordered ids', () => {
    const result = data.sort(sortByVerticalAxis);
    expect(result[0]).toEqual(expect.objectContaining({ id: 1 }));
    expect(result[1]).toEqual(expect.objectContaining({ id: 2 }));
    expect(result[2]).toEqual(expect.objectContaining({ id: 3 }));
})