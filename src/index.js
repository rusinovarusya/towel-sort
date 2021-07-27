
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];

    let i = 0;

    for (let key of matrix) {
        for (let j = 0; j < key.length; ++j) {
            if (i % 2 == 0) arr.push(key[j]);
            else arr.push(key[key.length - 1 - j]);
        } ++i;
    }
    return arr;
}
