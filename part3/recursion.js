//FUNCTION PRODUCT OF ARRAY>
//problem:
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
//solution:
const productOfArray = array => (array.length === 0) ? 1 : array[0] * productOfArray(array.slice(1))


//FUNCTION CONTAINS>
//problem:
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
//solution:
const contains = (obj, value) => {
	for(var key in obj){

		if(typeof obj[key] === 'object') return contains(obj[key], value)

		if (obj[key] === value) return true

	}
	return false;
}




//CODE WAR CHALLENGES =>

//PROBLEM:
//Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.
//SOLUTION:
// let array = []
// function realSize(arrays) {
//   let count = 0
//   arrays.forEach(val => {
//     if(Number.isInteger(val)) array.push(val)
//     if(typeof(val)  === 'object') realSize(val)
//   })
//   return array.length;
// }

const realSize = arr => arr.reduce((a, e) => a + (Array.isArray(e) ? realSize(e) : 1), 0);

realSize([[[5], 3], 0, 2, [], [4, [5, 6]]]) // 7


//PROBLEM:
//Write a function that sums squares of numbers in list that may contain more lists
//SOLUTION:
// let array = []
// function SumSquares(l){
//     l.forEach(val => typeof(val) === 'number' ? array.push(val*val) : SumSquares(val))
//     return array.reduce((a,b) => a+b)
// }

function SumSquares(l){
  return l.reduce(function(res, item) {
    return Array.isArray(item)? res + SumSquares(item) : res + Math.pow(item, 2);
  }, 0);
}

SumSquares([1,2,[3,4,[5]]]) // 55


//PROBLEM:
//You need to design a recursive function called replicate which will receive arguments times and number.The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
//SOLUTION:
let array = []
function replicate(times,num){
  array.push(num)
	times--
	if(times === 0) return array
	return replicate(times,num)
}
replicate(3,5) // [5,5,5]