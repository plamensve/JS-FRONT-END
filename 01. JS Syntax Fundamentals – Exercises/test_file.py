def sum_of_digits(number):
    result = 0

    for i in str(number):
        result += int(i)

    return result


print(sum_of_digits(12345))
