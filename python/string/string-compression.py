# Given string "aabcccccaaa", compress the string so that it becomes "a2b1c5a3"


def compression(string):
    if not string:
        return ''

    start = 0
    end = 0
    result = ''
    is_compressed = False

    while end < len(string) and start < len(string):
        while end < len(string) and string[start] == string[end]:
            end += 1

        result += string[start] + str(end - start)
        if (end - start) > 1:
            is_compressed = True
        start = end

    if is_compressed:
        return result
    else:
        return string


def main():
    base = ''
    happy = 'aabcccccaaa'
    edge = 'abcdefs'

    print(compression(base))
    print(compression(happy))
    print(compression(edge))


main()
