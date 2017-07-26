/**
 *  Find the length of the longest subsequence of a given sequence such that all elements
 *  of the subsequence are sorted in increasing order.
 *  For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} is 6 and LIS is {10, 22, 33, 50, 60, 80}
 *  or [10, 9, 2, 5, 3, 7, 101, 18] is 4 and LIS is [2, 3, 7, 101]
 */

const longestIncreasingSubsequence = (seq) => {
	const storage = [];
	for (let i = 0; i < seq.length; i++) {
		storage[i] = 1;
	}

	let maxSeq = 1;
	for (let i = 1; i < seq.length; i++) {
		let count = 0;
		for (let j = 0; j < i; j++) {
			if (seq[i] > seq[j]) {
				count = Math.max(storage[j], count);
			}
		}

		storage[i] = 1 + count;
		maxSeq = Math.max(storage[i], maxSeq);
	}

	return maxSeq;
};

// Driver program
(() => {
	const seq1 = [10, 9, 2, 5, 3, 7, 101, 18];

	console.log(longestIncreasingSubsequence(seq1));
})();
