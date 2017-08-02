/**
 *  Find the length of the longest subsequence of a given sequence such that all elements
 *  of the subsequence are sorted in increasing order.
 *  For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} is 6 and LIS is {10, 22, 33, 50, 60, 80}
 *  or [10, 9, 2, 5, 3, 7, 101, 18] is 4 and LIS is [2, 3, 7, 101]
 */
const longestIncreasingSubsequence = (seq) => {
	const longest = [];

	for (let i = 0; i < seq.length; i++) {
		longest.push(1);
	}

	for (let i = 1; i < seq.length; i++) {
		let count = 0;
		for (let j = 0; j < i; j++) {
			if (seq[j] < seq[i]) {
				count = Math.max(count, longest[j]);
			}
		}
		longest[i] = 1 + count;
	}

	return longest[seq.length - 1];
};

// Driver program
(() => {
	const seq1 = [10, 9, 2, 5, 3, 7, 101, 18];
	const seq2 = [10, 22, 9, 33, 21, 50, 41, 60, 80];

	console.log(longestIncreasingSubsequence(seq1));
	console.log(longestIncreasingSubsequence(seq2));
})();
