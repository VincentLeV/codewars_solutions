def namelist(names):
    arr = [x["name"] for x in names]
    return f"{', '.join(arr[:len(arr) - 1])} & {''.join(arr[len(arr) - 1:])}" if len(arr) > 1 else "".join(arr)


namelist([{'name': 'Bart'}, {'name': 'Lisa'}, {'name': 'Maggie'}, {'name': 'Homer'}, {'name': 'Marge'}])
print(namelist([{'name': 'Bart'}]))