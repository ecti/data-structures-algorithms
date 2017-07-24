/**
 * url: http://www.geeksforgeeks.org/dynamic-programming-set-4-longest-common-subsequence/
 * 
 * Problem:
 * Given two sequences, find the length of longest subsequence present in both of them. 
 * A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous. 
 * For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, .. etc are subsequences of “abcdefg”. 
 * So a string of length n has 2^n different possible subsequences.
 * 
 * Examples:
 * LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
 * LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
 */

/**
 * Top down (memorization)
 * Incomplete
 */
const memorization = {};
const lcsTopDown = (seq1, seq2, m, n) => {
    if (m === 0 || n === 0) {
        return 0;
    }
    if (seq1[m - 1] === seq2[n - 1]) {

        return 1 + lcsTopDown(seq1, seq2, m - 1, n - 1);
    }

    return Math.max(lcsTopDown(seq1, seq2, m - 1, n), lcsTopDown(seq1, seq2, m, n - 1));
};

/**
 * Bottom up (tabulation)
 */
const lcsBottomUp = (seq1, seq2, m, n) => {

    const storage = [];
    for (var i = 0; i <= n; i++) {
        storage.push([]);
    }

    for (var i = 0; i <= m; i++) {
        for (var j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                storage[i][j] = 0;
            } else if (seq1[i - 1] === seq2[j - 1]) {
                storage[i][j] = 1 + storage[i - 1][j - 1];
            } else {
                storage[i][j] = Math.max(storage[i - 1][j], storage[i][j - 1]);
            }
        }
    }

    return storage[m][n];
};

// Driver program
(() => {
    const seq1 = 'ABCDGH';
    const seq2 = 'AEDFHR';

    const m = seq1.length;
    const n = seq2.length;

    // console.log(lcsTopDown(seq1, seq2, m, n));
    console.log(lcsBottomUp(seq1, seq2, m, n));
})();