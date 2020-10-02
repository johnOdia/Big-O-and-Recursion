// Part 2
// Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!

//NUMBER 1
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}
//Time complexity: O(n)
//Space complexity: O(1)

//NUMBER 2
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
//Time complexity: O(n)
//Space complexity: O(1)
 
//NUMBER 3
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
//Time complexity: O(n)
//Space complexity:O(1)
 
// NUMBER 4
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
//Time complexity: O(n)
//Space complexity:O(n)
 
//NUMBER 5
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}
//Time complexity: O(n^2)
//Space complexity: O(n)