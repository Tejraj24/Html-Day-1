/* Memoization is  a technique that allow you to cache the results of a functions. 
So that it can be retrieved quickly when the function  is called again with the same arguments. 
In other words Memoization is a way of storing the results of a function , 
so that it can be retrieved without the function having to execute again. 
Memoization is particularly useful in situations where function is called multiple times
with the same input arguments. By caching the results of the function, you can avoid 
redundant computation and significantly improve the performance of your code. 
*/


function createSquareCache() {
    const cache = {}; // Line A: Our "Memory" object

    return function(n) { // Line B: The actual function we call
        if (n in cache) { // Line C: Checking the memory
            console.log(`Returning from cache for: ${n}`);
            return cache[n]; 
        } else {
            console.log(`Calculating square for: ${n}...`);
            let result = n * n; // Line D: The "heavy" work
            cache[n] = result;  // Line E: Saving to memory
            return result;
        }
    };
}

const getSquare = createSquareCache();

console.log(getSquare(10)); // Call 1
console.log(getSquare(10)); // Call 2
console.log(getSquare(5));  // Call 3