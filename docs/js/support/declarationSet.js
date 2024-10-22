SET

const set = new Set([1, 2, 2, 2, 3]) // ДУБЛИ АВТОМАТИЧЕСКИ УДАЛЯЮТСЯ

console.log(set)

ПЕРЕДАЧА МАССИВА В SET

const arr = [100, 100, 1000, 1000, 5000] // ДУБЛИ АВТОМАТИЧЕСКИ УДАЛЯЮТСЯ
const set = new Set (arr)

console.log(set)

МЕТОД PUSH И ADD

const arr = []
const set = new Set ()

arr.push('Vova')
set.add('Vova')