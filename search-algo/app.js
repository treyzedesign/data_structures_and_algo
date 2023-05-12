// LINEAR SEARCH 

// function linear(n, t){
//   if (n.includes(t) == false){
//     return -1
//   }
//   for(let i = 0; i < n.length; i++){
//     if(n[i] == t){
//         return n.indexOf(n[i])
//     }
//   }
// }

// console.log(linear([1,3,5,7,9], 3));

// big-O is O(n)

// BINARY SEARCH 

// function binary(arr, t){
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
//     while (leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

//         if (arr[middleIndex] === t){
//             return middleIndex
//         }

//         if(t < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         }else{
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }
// console.log(binary([-5,2,4,6,10], 3));
// console.log(binary([-5,2,4,6,10], 4));
// console.log(binary([-5,2,4,6,10], 6));

// big-O is O(log(n))