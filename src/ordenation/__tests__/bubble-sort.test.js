const { bubbleSort, bubbleSortImproved } = require('../bubble-sort');

describe('Bubble Sort', () => {
  test('Sort bubbleSort', () => {
    const data = [5, 2, 7, 5, 4, 9, 8];
    expect(bubbleSort(data)).toEqual(data.sort());
  });
  
  test('Sort bubbleSortImproved', () => {
    const data = [5, 2, 7, 5, 4, 9, 8];
    expect(bubbleSort(data)).toEqual(data.sort());
  });
});