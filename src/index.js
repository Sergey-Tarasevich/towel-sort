module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    let arrResult = [];

    for (i = 0; i < matrix.length; i++) {

        if (i % 2 != 0) {
            matrix[i].reverse();
        }

        arrResult = arrResult.concat(matrix[i]);
    }

    return arrResult;
}
