const { selection, bubble, insertion } = require('../ordenation');

describe('Ordenation', () => {
  test('Selection', () => {
    const data = [5, 2, 7, 5, 4, 9, 8];
    expect(selection(data)).toEqual(data.sort());
  });

  test('BubbleSort', () => {
    const data = [5, 2, 7, 5, 4, 9, 8];
    expect(bubble.default(data)).toEqual(data.sort());
  });
  
  test('BubbleSort improved', () => {
    const data = [5, 2, 7, 5, 4, 9, 8];
    expect(bubble.improved(data)).toEqual(data.sort());
  });

  test('Insertion', () => {
    const data = [5, 2, 7, 5, 4, 9, 8];
    expect(insertion(data)).toEqual(data.sort());
  });
});