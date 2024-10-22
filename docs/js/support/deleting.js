УДАЛЕНИЕ ОДНОГО ЭЛЕМЕНТА

const data = new Map()
data.set('name', undefined)
data.delete('name')

console.log(data.has('name'));

УДАЛЕНИЕ ВСЕГО СПИСКА

const data = new Map()
data.set('name', 'Vova')
data.set('age', '24')
data.clear()

console.log('data:', data)