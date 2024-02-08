//Given two integers a and b, which can be positive or negative, 
//find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum(a, b) {
    return (b - a + 1) * (a + b) / 2;
}