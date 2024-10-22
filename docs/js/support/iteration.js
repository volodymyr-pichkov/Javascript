ИТЕРАЦИЯ

const data = new Map()
data.set('name', 'Vova')
data.set('age', '24')

console.log('keys:', data.keys())
console.log('values:', data.values())
console.log('entries:', data.entries())

ПЕРЕБОР ИТЕРАЦИИ

for (const key of data.keys()) {
    console.log('key:', key)
}

for (const value of data.values()) {
    console.log('value:', value)
}

for (const entry of data.entries()) {
    console.log('entry:', entry)
}

МЕТОД forEach

const data = new Map()

data.set('name', 'Vova')
data.set('age', '24')

data.forEach((value, key, map) => {
    console.log('value:', value)
    console.log('key:', key)
    console.log('map:', map)
})