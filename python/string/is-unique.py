# Check if a string has all unique characters


def is_unique(string):
    visited = {}

    for char in string:
        if char in visited:
            return False
        else:
            visited[char] = 1

    return True


def main():
    base = ''
    happy = 'abcdefg'
    sad = 'abcdedf'

    print(is_unique(base))
    print(is_unique(happy))
    print(is_unique(sad))


main()
