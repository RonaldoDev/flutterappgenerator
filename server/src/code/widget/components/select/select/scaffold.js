
const getTemplate = (properties) => {
    const { color, text, action, items } = properties;
    console.log(items);
    return (
      `DropdownButton<String>(
        icon: Icon(Icons.arrow_drop_down),
        iconSize: 24,
        elevation: 16,
        isExpanded: true,
        hint: Text('${text}'),
        underline: 
          Container(
            decoration: const BoxDecoration(
                border: Border(bottom: BorderSide(color: Colors.grey))
            ),
          ),
        onChanged: (String newValue) {
          setState(() {
            dropdownValue = newValue;
          });
        },
        items: <String>[${items.map(item => `'${item.label}'`)}].map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value),
            );
          }).toList(),
      )` ); 
      
};

const select = (properties) => ({
    template: getTemplate(properties),
    minChildren: 0,
    maxChildren: 1,
    children: []

})
module.exports = {
    select
}



