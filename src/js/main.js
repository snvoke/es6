import { getTriangleArea, square } from './math';

const solution = n => getTriangleArea(n, square(n) / 2);

console.log(solution(0));
console.log(solution(10));
console.log(solution(12));
console.log(solution(14));
console.log(solution(16));
console.log(solution(20));
