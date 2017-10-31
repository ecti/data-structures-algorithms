def power_sum(target, n):
    max_number = int(target ** (1/n))
    result = find_combinations(target, n, max_number, 0)
    return result


def find_combinations(target, n, number, total):
    if number == 0:
        return 0

    number_to_n = number ** n
    result = 0

    if total + number_to_n == target:
        result += 1

    result += find_combinations(target, n, number - 1, total)

    total += number_to_n
    result += find_combinations(target, n, number - 1, total)

    return result


def main():
    target = 100
    n = 3
    print(power_sum(target, n))

    target = 10
    n = 2
    print(power_sum(target, n))

    target = 100
    n = 2
    print(power_sum(target, n))

    target = 10
    n = 3
    print(power_sum(target, n))


main()
