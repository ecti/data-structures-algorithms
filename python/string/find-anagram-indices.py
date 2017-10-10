# Find indices of all anagram of word 'AB' in s 'ABCDBACDAB. (Ans: 0, 4, 8)


def find_indices(s, word):
    if len(s) < len(word):
        return []

    result = []
    n = len(s)
    m = len(word)
    word_set = set(word)

    for i, letter in enumerate(s[:n - m + 1]):
        current_set = set(s[i:i + m])

        if word_set == current_set:
            result.append(i)

    return result


def main():
    s = 'ABCDBACDAB'
    word = 'AB'
    print(find_indices(s, word))


main()