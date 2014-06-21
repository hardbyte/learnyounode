function countWords (inputWords) {
    return inputWords.reduce(
        function (acc, word) {
            if (word in acc) {
                acc[word] += 1;
            } else {
                acc[word] = 1;
            }
            return acc
        },
        {}
    )
}

module.exports = countWords;
