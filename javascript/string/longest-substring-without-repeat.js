/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

const lengthOfLongestSubstring = (s) => {
    let result = 0;
    const set = [];
    
    let i = 0;
    let j = 0;
    while (i < s.length && j < s.length) {
        if (set.indexOf(s[j]) === -1) {
            set.push(s[j]);
            j++;
            result = Math.max(result, j - i);
        } else {
            set.shift();
            i++;
        }
    }
    
    return result;
};

// Driver program
(() => {
    const input1 = 'abcabcbb';  // result = 3
    const input2 = 'bbbbbbbbbb';    // result = 1
    const input3 = 'pwwkew';    // result = 3

    console.log(lengthOfLongestSubstring(input1));
    console.log(lengthOfLongestSubstring(input2));
    console.log(lengthOfLongestSubstring(input3));
})();