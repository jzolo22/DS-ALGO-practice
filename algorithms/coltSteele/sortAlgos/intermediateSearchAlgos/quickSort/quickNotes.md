## **Quick Sort**
- like merge sort, takes advantage of the fact that arrays of 0 or 1 elements are always sorted
- works by selecting one element called "the pivot" and finding the index where the pivot should end up in the sorted array
- once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

### **Big O**
- Time Complexity (best): O(n log n) - same as merge sort
- Time Complexity (average): O(n log n) - same as merge sort
- Time Complexity (worst): O(n^2)
  - if the array is already sorted and we're using the first element as the pivot, then each we have to "decompose" the array into smaller arrays n times AND compare to n elements
  - this happens if every time the pivot is selected it's the smallest element or if every time the pivot is selected it's the largest element
- Space Complexity: O(log n)