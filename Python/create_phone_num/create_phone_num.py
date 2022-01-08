def create_phone_number(n):
    num_str_temp = []
    for num in n:
        num_str_temp.append(str(num))

    num_str = "".join(num_str_temp)
    return f"({num_str[0:3]}) {num_str[3:6]}-{num_str[6:]}"


create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
