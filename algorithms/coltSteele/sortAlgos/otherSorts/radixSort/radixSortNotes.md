# Radix Sort

- we do NOT make comparisons
- works on NUMBERS 
- exploits the fact that info about the size of a number is encoded in the number of digits
  - more digits means larger number number
- the number of times we need to "sort" using Radix is the length of the longest number

## Big O
- Time Complexity Best: O(nk)
- Time Complexity Avg: O(nk) --> can be interpreted as O(n log n)
- Time Complexity Worst: O(nk)
- Space Complexity: O(n + k)