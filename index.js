function hasTargetSum(array, target) {
  // Initialize a set to keep track of numbers we've seen
  let seenNumbers = new Set();

  // Iterate over each number in the array
  for (let num of array) {
      // Calculate the complement of the current number with respect to the target
      let complement = target - numb;
      
      
      if (seenNumbers.has(complement)) {
          return true;
      }
      
     
      seenNumbers.add(num);
  }

  
  return false;
}


// You can run `node index.js` to view these console logs
if (require.main === module) {

console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;