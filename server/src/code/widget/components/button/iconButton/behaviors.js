
function getAction(action) {
    const navigate = action.value.toLowerCase() === "camera" ? `${action.value}Page(camera: widget.camera)` : `${action.value}Page()`;
    switch(action.type) {
        case 'navigate':
            return `Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => ${navigate},
                  ),

              );`
        default:
            return '/*...*/'
    }
}

module.exports = {
    getAction
}