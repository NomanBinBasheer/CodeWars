/* Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */ 
    


// Solution


// Why go up to the square root of the number?

// When checking if a number num is prime, we only need to test divisibility up to its square root. This is because if num is divisible by a number larger than its square root, then it must also be divisible by a number smaller than its square root.

// For example, let's say num = 100. The square root of 100 is 10. If num is divisible by a number larger than 10, say 20, then it must also be divisible by a number smaller than 10, which is 5. So, we only need to check up to the square root.


function isPrime(num) {
    if (num <= 1) return false;
    const s = Math.sqrt(num); 
    for(let i = 2; i <= s; i++) { 
        if(num % i === 0) return false; 
    }
    return true;
}


