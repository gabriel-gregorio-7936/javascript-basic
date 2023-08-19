def get_sum_of_digits(num):
    sum = 0
    digits = str(num)
    array = []

    for i in digits:
        array.append(int(i))

    for x in array:
        sum = sum + x
    return sum

print(get_sum_of_digits(1234))