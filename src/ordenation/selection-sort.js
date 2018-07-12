/**
 * Selection sort ordenation algoritm
 * Time Complexity: O(n2) 
 * 
 * @param {Array} data 
 * @return {Array}
 */
export const selectionSort = data => {
  let min;

  for (let i = 0; i < data.length - 1; i++) {
    min = i;

    for (let j = i; j < data.length; j++) {
      if (data[min] > data[j]) {
        min = j;
      }
    }

    if (i !== min) {
      [data[min], data[i]] = [data[i], data[min]];
    }
  }

  return data;
}