/** 
    Takes an array and groups all elements according to a key. It returns a map with the keys and for each key, an array of the respective elements.  

    @param array {Array} An array of objects
    @param accessor A function to access the value to group by from an object, or the name of the attribute.
*/
function groupby(array, accessor) {
    var i,
        max,
        v,
        groups = {};

    var getkey = (typeof accessor === 'string') ? function (d) {return d[accessor]; } : accessor;

    for (i = 0, max = array.length; i < max; i++) {
        v = getkey(array[i]);
        if (groups.hasOwnProperty(v)) {
            groups[v].push(array[i]);
        } else {
            groups[v] = [array[i]];
        }
    }

    return groups;
}

module.exports = groupby;
