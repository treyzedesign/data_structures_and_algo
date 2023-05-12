// FIBONACCI SEQUENCE

// given a number 'n' , find the first 'n' elements of the fibonacci sequence

// function fibonacci(n){
//     let fib = [0 , 1]
//     for(let i = 2; i < n; i++){
//         fib[i]= fib[i - 1] + fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(5))

// big-O is O(n)

// FACTORIAL OF A NUMBER

// given an integer 'n', find the factorial of that integer

// function  factorial(n) {
//     let result = 1
//    for(let i=2; i<=n; i++){
//     result = result * i;
//    }
//    return result
// }

// console.log(factorial(4));

// big O is O(n)

// PRIME NUMBER

// function isPrime(n){
//     if(n < 2){
//         return false
//     }
//     for(let i = 2; i < n; i++){
//         if(n % i == 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));   
// big-O is O(n)

// function isPrime(n){
//     if(n < 2){
//         return false
//     }
//     for(let i = 2; i < Math.sqrt(n); i++){
//         if(n % i == 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));  
// big-O is O(sqrt(n))

// POWER OF TWO

// function isPowerOfTwo(n){
//     if(n < 1){
//         return false
//     }
//     while (n > 1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n= n / 2     // here input size reduced into half
//     } 
//     return true

// }
// console.log(isPowerOfTwo(4));  // true
// console.log(isPowerOfTwo(5));  // false
// console.log(isPowerOfTwo(8));  // true

// big-O is O(log(n)) bcos we reduced the input size (n) into half

// RECURSIVE FIBONACCI SEQUENCE
// find the nth element of a fibonacci sequence

// function refibonacci(n){
//    if (n < 2){
//     return n
//    }
//    return refibonacci(n-1) + refibonacci(n-2)
// }
// console.log(refibonacci(6));
// console.log("okay");

// big-O is O(2^n)

// RECURSIVE FACTORIAL OF A NUMBER

// function refactorial(n){
//    if(n == 0){
//       return 1
//    }
//    return n * refactorial(n-1)
// }

// console.log(refactorial(4)) 
// console.log(refactorial(5))
// console.log(refactorial(6))

// big-O is O(n)

