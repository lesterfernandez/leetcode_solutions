def generateParenthesis(n):
  output = []
  current = []
  def recurse(n, num_open):
    if n == 0 and num_open == 0:
      output.append("".join(current))
      return output
    if num_open:
      current.append(")")
      recurse(n, num_open - 1)
      current.pop()
    if n:
      current.append("(")
      recurse(n - 1, num_open + 1)
      current.pop()
    return output
  return recurse(n, 0)

num = input("Please enter an integer: ")
if not num.isdigit():
    print("invalid integer")

n = int(num)
output = generateParenthesis(n)
print(output)

