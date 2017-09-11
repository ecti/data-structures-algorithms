'''
Given "12 * 4 + 6 * 2 * 3 + 8". Calculate result.

Method 1: split the string by operators with respect to order of operations. * / + -
Method 2: using 2 stacks, loop over every character once and process
'''

def calculate1(input):
    result = 0

    multiplications = input.split('+')
    for i, multiplication in enumerate(multiplications):
        integers = multiplication.split('*')
        product = 1

        for integer in integers:
            product *= int(integer)

        multiplications[i] = product

    additions = multiplications[:]
    for integer in additions:
        result += integer

    return result

def main():
    input = '12 * 4 + 6 * 2 * 3 + 8'

    print(calculate1(input))

main()