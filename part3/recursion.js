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
