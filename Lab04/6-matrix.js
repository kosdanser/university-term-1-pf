function max(matrix) {
    let maxValue = matrix[0][0];

    for (const row of matrix) {
        for (const value of row) {
            if (value > maxValue) {
                maxValue = value;
            }
        }
    }
    
    return maxValue;
}

module.exports = { max };