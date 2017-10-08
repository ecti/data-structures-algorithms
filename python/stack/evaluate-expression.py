# Given the string "((5 + 20) * (8 - 3)) / 4", calculate result by using stack(s).


def calculate(expression):
    operands = []
    operators = []
    current_number = 0

    for char in expression:
        if not char.isdecimal():
            operands.append(current_number)
            current_number = 0

            if operators and (operators[-1] == '*' or operators[-1] == '/'):
                right = operands.pop()
                left = operands.pop()
                operator = operators.pop()

                if operator == '*':
                    operands.append(left * right)
                else:
                    operands.append(int(left / right))

            operators.append(char)
        else:
            current_number = current_number * 10 + int(char)
    operands.append(current_number)

    while operators:
        right = operands.pop()
        left = operands.pop()
        operator = operators.pop()

        if operator == '+':
            operands.append(left + right)
        elif operator == '*':
            operands.append(left * right)
        elif operator == '/':
            operands.append(int(left / right))
        elif operator == '-':
            operands.append(left - right)

    return operands.pop()


def evaluate(expression):
    stack = []

    for char in expression:
        if char == ')':
            sub_expression = ''

            while stack[-1] != '(':
                sub_expression = stack.pop() + sub_expression
            stack.pop()

            sub_result = str(calculate(sub_expression))
            stack.append(sub_result)
        elif not char.isspace():
            stack.append(char)

    result = calculate(''.join(str(x) for x in stack))
    return result


def main():
    expression = '((5 * 20 / 5 - 2 * 4) * (8 - 3)) / 4'
    print(evaluate(expression))


main()
