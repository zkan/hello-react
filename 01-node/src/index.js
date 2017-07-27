// need babel
import square from './math'

console.log("Hello")

const area = (r) => (
  3.14 * r * r
)

console.log(area(5))

const numbers = [1, 2, 3]
console.log(numbers.map(number => number * 2))
console.log(numbers.filter(number => number % 2 == 0))
console.log(numbers.reduce((total, value) => total + value))

console.log(square(5))
