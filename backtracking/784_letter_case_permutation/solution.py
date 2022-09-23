def letterCasePermutation(s):
    out = []
    current = []
    A_ID = ord("A")
    z_ID = ord("z")

    def recurse(i):
        if i == len(s):
            new_string = "".join(current)
            out.append(new_string)
        elif A_ID <= ord(s[i]) <= z_ID:
            current.append(s[i].lower())
            recurse(i + 1)
            current.pop()

            current.append(s[i].upper())
            recurse(i + 1)
            current.pop()
        else:
            current.append(s[i])
            recurse(i + 1)
            current.pop()
    recurse(0)
    return out


s = input("input a string: ")
print(letterCasePermutation(s))
