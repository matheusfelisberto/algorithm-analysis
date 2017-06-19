/**
 * Insertion sort
 * 
 * @param {Array} array 
 * @return {Array}
 */
const sort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let temporary = array[i];
    let before = i - 1;

    while (before >= 0 && array[before] > temporary) {
      array[before + 1] = array[before];
      before--;
    }

    array[before + 1] = temporary;
  }

  return array;
}

export default sort;
