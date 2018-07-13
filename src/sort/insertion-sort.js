/**
 * Insertion sort algorithm
 * Time Complexity: O(n*n)
 * 
 * @see https://www.geeksforgeeks.org/insertion-sort/
 * @param {Array} data
 * @return {Array}
 */
module.exports = data => {
  let temporary, j;

  for (let i = 0; i < data.length; i++) {
    j = i;
    temporary = data[i];

    while (j > 0 && data[j - 1] > temporary) {
      data[j] = data[j - 1];
      j--;
    }

    data[j] = temporary;
  }

  return data;
};
