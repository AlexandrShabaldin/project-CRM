// Создаём объект который принимает в себя DOM элементы
const elements = {
    form: document.querySelector('#form'),
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
}
// Ф-я которая будет подставлять данные в форму на странице
function insertTestData(data) {
    elements.name.value = data.name;
    elements.phone.value = data.phone;
    elements.email.value = data.email;
    elements.product.value = data.product;
}

function getFormInput() {
    return new FormData(elements.form)
}

function clearForm() {
    elements.form.reset();
}
// Экспортируем данные
export {elements, insertTestData, getFormInput, clearForm};