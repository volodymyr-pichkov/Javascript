// ПРЕОБРАЗОВАНИЕ ОБЪЕКТА В КОЛЛЕКЦИЮ

const obj = {
    name: 'Vova',
    age: 24,
}

const map = new Map( Object.entries(obj))

map.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})

// ПРЕОБРАЗОВАНИЕ КОЛЛЕКЦИИ В ОБЪЕКТ

const map = new Map ([
    ['name', 'Vova'],
    ['age', 24],
])

const obj = Object.fromEntries(map)

console.log(obj);