
function sortByVerticalAxis(a,b) {
    if (a.layoutItem.y < b.layoutItem.y)
        return - 1;
    if (a.layoutItem.y > b.layoutItem.y)
        return 1;
    if (a.layoutItem.y === b.layoutItem.y)
        return 0;
};

module.exports = {
    sortByVerticalAxis
}