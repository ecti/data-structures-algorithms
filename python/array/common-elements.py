# Given 2 sorted arrays, A = [1, 3, 4, 6, 7, 9] and B = [1, 2, 4, 5, 9, 10].
# Find the common elements and return the common array.
# Solve within O(max(n, m)).


def common_elements(list1, list2):
    n = len(list1)
    m = len(list2)
    i = 0
    j = 0
    result = []

    while i < n and j < m:
        if list1[i] > list2[j]:
            j += 1
        elif list1[i] < list2[j]:
            i += 1
        else:
            result.append(list1[i])
            i += 1
            j += 1

    return result


def main():
    list1 = [1, 3, 4, 6, 7, 9]
    list2 = [1, 2, 4, 5, 9, 10]
    print(common_elements(list1, list2))


main()
