/**
 * Bubble sort algorithm
 * Time Complexity: O(n*n)
 *
 * @see https://www.geeksforgeeks.org/bubble-sort/
 * @param {Array} data
 * @return {Array}
 */
const bubbleSort = data => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] > data[j+1]) {
        [data[j], data[j+1]] = [data[j+1], data[j]];
      }
    }
  }

  return data;
};

/**
 * Bubble sort (improved) algorithm
 * Time Complexity: O(n*n)
 *
 * @see https://www.geeksforgeeks.org/bubble-sort/
 * @param {Array} data
 * @return {Array}
 */
const bubbleSortImproved = data => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < (data.length - 1 - i); j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }

  return data;
};

module.exports = { default: bubbleSort, improved: bubbleSortImproved };
