// Создаём класс ExampleItem в котором находится конструктор и который принимает в себя следующие значения (name, phone, email, product)
class ExampleItem {
    constructor (name, phone, email, product) {
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
    }
}
// Создаём новые объекты от класса ExampleItem в который передаём следующие значения
const testData = [
    new ExampleItem('Иван Фролов', parseInt('+79998172044'), 'frolov@gmail.com', 'course-js'),
    new ExampleItem('Сергей Маляр', parseInt('+79208771212'), 'malyar@mail.ru', 'course-php'),
    new ExampleItem('Никита Серый', parseInt('+79446665432'), 'seryi@gmail.com', 'course-wordpress'),
    new ExampleItem('Алексей Жмых', parseInt('+79325114991'), 'zhmyh@gmail.com', 'course-vue'),
    new ExampleItem('Пётр Малый', parseInt('+794431186645'), 'malyi@mail.ru', 'course-html'),
    new ExampleItem('Влад Медведев', parseInt('+79227779131'), 'medwedev@gmail.ru', 'course-wordpress'),
    new ExampleItem('Александр Столяров', parseInt('+79556198764'), 'stolyarov@mail.com', 'course-js'),
    new ExampleItem('Илья Гусь', parseInt('+79448559999'), 'gys@gmail.com', 'course-php'),
    new ExampleItem('Павел Попов', parseInt('+79118223385'), 'popov@gmail.ru', 'course-html'),
    new ExampleItem('Виталий Медоедов', parseInt('+79443116269'), 'medoedov@gmail.ru', 'course-vue'),
]
// Создаём ф-ю которая будет выбирать рандомный объект из массива testData
function getRandomIndex(max) {
    return Math.floor(Math.random() * max)
}
// Создаём ф-ю которая будет возвращать рандомный эдемент из массива testData. Также делаем export default у этой ф-ии
export default function getRandomData() {
    const index = getRandomIndex(testData.length)
    return testData[index]
}