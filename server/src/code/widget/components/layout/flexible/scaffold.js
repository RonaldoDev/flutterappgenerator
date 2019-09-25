
const flexible = (component) => {
    return `Flexible(
            fit: FlexFit.tight,
            child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:${component}
                )
            )`
};

module.exports = {
    flexible
}