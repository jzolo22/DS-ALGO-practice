/*

- In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.

- Given an array, this helper function should designate an element as the pivot.

- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater are moved to the right

- The order on either side doesn't matter

- The helper should do this in place, i.e. should not create a new array

- When complete, the helper should return the index of the pivot

- The runtime of quick sort depends in part on how one selects the pivot.

- Ideally the pivot should be chosen so that it's roughly the median value in the dataset you're sorting

- For simplicity, we'll always select the first element (but this does have consequences)


 */