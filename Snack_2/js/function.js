function sameLength(word1, word2) {
    return word1.length === word2.length;
}

function getLongestWord(word1, word2) {
    if (word1.length > word2.length) {
        return word1;
    } else {
        return word2;
    }
}