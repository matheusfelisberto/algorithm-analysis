/**
 * Bubble sort ordenation algoritm
 *
 * @param {Array} data
 * @return {Array}
 */
export const bubbleSort = data => {
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
 * Bubble sort (improved) ordenation algoritm
 *
 * @param {Array} data
 * @return {Array}
 */
export const bubbleSortImproved = data => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < (data.length - 1 - i); j++) {
      if (data[j] > data[j + 1]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
  }

  return data;
};