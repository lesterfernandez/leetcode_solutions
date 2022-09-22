def numTilePossibilities(tiles: str) -> int:
  char_map = dict()
  for char in tiles:
    current = char_map.get(char, 0)
    char_map[char] = current + 1
  
  def recurse(i):
    count = i
    value_sum = 0
    for val in char_map.values():
      value_sum += val
    if value_sum == 0: return count
    for key, val in char_map.items():
      if val == 0: continue
      char_map[key] = val - 1
      count = recurse(count + 1)
      char_map[key] = val
    return count
  
  return recurse(0)


tiles = input("enter a word: ")
print("number of possible non-empty subsequences of letters:", numTilePossibilities(tiles))
