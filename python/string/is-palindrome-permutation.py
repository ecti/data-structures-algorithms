# Given a string, check if it's permutation of palindrome
# input: Tact Coa
# output: True (permutations: "taco cat", "atco cta")


def is_palindrome_permutation(string):
    if not string and string != '':
        return False

    storage = {}

    for letter in string:
        char = letter.lower()
        if char != ' ':
            if char in storage:
                storage[char] += 1
            else:
                storage[char] = 1

    single_mid_char = False
    for letter in storage:
        if storage[letter] == 1:
            if not single_mid_char:
                single_mid_char = True
            else:
                return False
        elif storage[letter] % 2 != 0:
            return False

    return True


def main():
    base = ''
    happy = 'Tact Coa'
    sad = 'Sky Kiki'

    print(palindrome_permutation(base))
    print(palindrome_permutation(happy))
    print(palindrome_permutation(sad))


main()
