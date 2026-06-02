/* 
Flatten Array means converting a multi-dimensional array into a 
single-dimensional array. You can achieve this using reduce method in javascript.
Here is an example of how flatten an array using array.reduce:      
*/

function flattenArray(arr) {
  let flattened = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattenArray(item).forEach((nestedItem) => {
        flattened.push(nestedItem);
      });
    } else {
      flattened.push(item);
    }
  });
  return flattened;
}

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


