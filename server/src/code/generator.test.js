const { makeCodeConversion } = require('./generator');

const data = {
    content : '$title $components, views $import, Checkbox, $variavel, $title',
    widgets : ['widgets'],
    title : 'testpage'
};
test('test replace strings in content', () => {
    const text = makeCodeConversion(data.content, data.widgets, data.title);
    expect(text)
    .toMatch(
    `testpage widgets, views import \"views.dart\";, Checkbox, bool _isSelected = true;, testpage`
    );

})