# Given 2 strings. Check if they are one edit or 0 edits away.


def is_one_away(s1, s2):
    if abs(len(s1) - len(s2)) > 2:
        return False

    storage = {}
    for char in s1:
        if char in storage:
            storage[char] += 1
        else:
            storage[char] = 1

    for char in s2:
        if char in storage:
            storage[char] -= 1
        else:
            storage[char] = 1

    sum = 0
    for char in storage:
        sum += storage[char]

    if sum > 2 or sum < 0:
        return False
    else:
        return True


def main():
    base1 = ''
    base2 = ''
    print(is_one_away(base1, base2))

    s1 = 'pale'
    s2 = 'pales'
    print(is_one_away(s1, s2))

    s1 = 'pale'
    s2 = 'ple'
    print(is_one_away(s1, s2))

    s1 = 'pale'
    s2 = 'bale'
    print(is_one_away(s1, s2))

    s1 = 'pale'
    s2 = 'bake'
    print(is_one_away(s1, s2))

    s1 = 'pale'
    s2 = 'palbs'
    print(is_one_away(s1, s2))


main()
