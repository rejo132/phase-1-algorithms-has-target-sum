// index.js

function hasTargetSum(array, target) {
  const seen = new Set();
  for (let num of array) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true; // Found a pair that sums to target
    }
    seen.add(num);
  }
  return false; // No pair found
}

/* 
  Big O Time Complexity: O(n)
  - The function uses a single loop through the array (n elements).
  - Set operations (has, add) are O(1) on average.
  - Space complexity is O(n) due to storing up to n elements in the Set.
*/

/* 
  Pseudocode:
  - Take an array and target number as input
  - Create an empty Set to store seen numbers
  - For each number in the array
    - Calculate complement (target - number)
    - If complement is in Set
      - Return true (pair found)
    - Add current number to Set
  - Return false (no pair found)
*/

/*
  Explanation:
  This solution efficiently checks if two numbers in the array sum to the target using a hash set:
  - For each number, we compute its "complement" (target - number) and check if it’s already in the Set.
  - If it is, we’ve found two numbers that sum to the target, so return true.
  - If not, add the current number to the Set and continue.
  - If the loop completes without finding a pair, return false.
  - This handles all test cases, including negatives and single-element arrays (where no pair exists).
  - It’s optimized at O(n) time complexity, better than a nested loop approach (O(n²)).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Provided tests
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Additional custom tests
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;