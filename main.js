// Sum all the numbers of a given array, except the highest and the lowest element.

            // SOLUTION
// Declare a function taking an array of numbers
function sumArray(arr){
    // sort the array
    // slice out the lowest and highest elements
    // sum the remaining elements
    return arr.sort((a,b) => a - b).slice(1, -1).reduce((acc, c) => acc + c, 0)
}
alert(sumArray([1,3,2,5,4]))


// const sumArray = arr => {
//     arr.sort((a,b) => a - b).slice(1, -1).reduce((acc, c) => acc + c, 0)
//     return arr
// }
// console.log(sumArray([1,3,5,7,9,11]))

            // Using arrow function
// sumArray = a => a ? a.sort((a,b) => a - b).slice(1, -1).reduce((acc, c) => acc + c, 0) : 0
// alert(sumArray([1,3,5,7,9,11]))


// Another way to solve it. NB: The array elements must be arranged from lowest to the hihgest or vice-versa, making this solution les reliable
// function sumArray(arr){
//     sum = 0
//     arr.slice(1,-1).map(x => sum += x )
//     alert(sum)
// }
// sumArray([1,3,5,7,9,11])