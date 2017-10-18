# Given a string and true length of string, replace all whitespace with "%20"
# input: "Mr John Smith     ", 13
# output: "Mr%20John%20Smith"


def urlify(string, n):
    if not len(string):
        return ''

    encoder = '%20'
    result = ''

    for i in range(n):
        char = string[i]
        if char == ' ':
            result += encoder
        else:
            result += char

    return result


def main():
    base = ''
    happy = 'Mr John Smith      '

    print(urlify(base, 0))
    print(urlify(happy, 13))


main()
