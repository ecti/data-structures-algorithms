# Given two strings. Check if they are permutations of each other.


def is_permutation(s1, s2):
    storage = {}

    for char in s1:
        if char in storage:
            storage[char] += 1
        else:
            storage[char] = 1

    for char in s2:
        if char not in storage or (char in storage and storage[char] < 0):
            return False
        else:
            storage[char] -= 1

    for key in storage:
        if storage[key] > 0:
            return False

    return True


def main():
    base1 = ''
    base2 = ''

    happy1 = 'ABCD'
    happy2 = 'BDAC'

    sad1 = 'IOXDEF'
    sad2 = 'XDEIAO'

    print(is_permutation(base1, base2))
    print(is_permutation(happy1, happy2))
    print(is_permutation(sad1, sad2))


main()
