from typing import List


def permute(nums):
  def recurse(current, output, num_set) -> List[List[int]]:
    if not num_set:
      output.append(current.copy())
      return output
    for num in nums:
      if num not in num_set: continue
      num_set.remove(num)
      current.append(num)
      recurse(current, output, num_set)
      current.pop()
      num_set.add(num)
    return output
  return recurse([], [], set(nums))

num_input = input("input some numbers like this '1,2,3' without quotation marks\n")
nums = num_input.split(",")
nums = list(map(int, nums))
result = permute(nums)
for arr in result: print(arr)
