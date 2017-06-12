import { getTriangleArea, square } from './math';

const solution = n => getTriangleArea(n, square(n) / 2);

console.log(solution(0));
console.log(solution(10));
console.log(solution(12));
