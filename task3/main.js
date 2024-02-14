/* 
Butun sonlardan iborat bo'sh bo'lmagan massivni berilgan. Bittasidan tashqari har bir element ikki marta takrorlanadi. Takrorlanmaydigan sonni toping:
 
Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/
const nums = [4,1,2,1,2]
let numsObj = {}
let result

for (let i = 0; i < nums.length; i++) {
  if(nums[i] in numsObj) {
    console.log('existing item');
    numsObj[nums[i]] += 1  
  } else {
    numsObj[nums[i]] = 0
  }
}
for (key in numsObj) {
  if(numsObj[key] === 0) {
    result = key
  }
}

console.log(result);

