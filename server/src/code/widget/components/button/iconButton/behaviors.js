
function getAction(action) {
    switch(action.type) {
        case 'navigate':
            return `Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => ${action.value}(),
                  ),

              );`
        default:
            return '/*...*/'
    }
}

module.exports = {
    getAction
}