const fruitName = document.querySelectorAll('.fruit-name');
const fruitQuantity = document.querySelectorAll('.fruit-quantity');
const btnAdd = document.querySelectorAll('.btn-add');
const btnRemove = document.querySelectorAll('.btn-remove');
const btnRemoveAll = document.querySelectorAll('.btn-remove-all');
const addToBasket = document.querySelectorAll('.btn-add-to-basket');
const userFruitBasket = document.querySelector('.user-fruit-basket');
const empty = document.querySelector('.empty');
const fruitBasketList = document.querySelector('.fruit-basket-list');


let userBasket = [];

for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener('click', function (event) {
        let target = event.target;
        let targetPreviousElement = target.previousElementSibling;
        let quantityVariable = targetPreviousElement.textContent;
        quantityVariable++;
        fruitQuantity[i].textContent = quantityVariable;
        userBasket.quantity = quantityVariable;
        let targetFirstPreviousElement = targetPreviousElement.previousElementSibling;
        let fruitVariable = targetFirstPreviousElement.textContent;
        userBasket.fruit = fruitVariable;
    });
}

for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener('click', function (event) {
        let target = event.target;
        let targetPreviousElement = target.previousElementSibling;
        let targetFirstPreviousElement = targetPreviousElement.previousElementSibling;
        let quantityVariable = targetFirstPreviousElement.textContent;
        quantityVariable--;
        fruitQuantity[i].textContent = quantityVariable;
        userBasket.quantity = quantityVariable;
        userBasket.fruit = fruitVariable;
    });
}

for (let i = 0; i < addToBasket.length; i++) {
    addToBasket[i].addEventListener('click', function () {
        let fruit = userBasket.fruit;
        let quantity = userBasket.quantity;
        userBasket.push({ fruit, quantity });

        let text = '';
        for (user of userBasket) {
            text += `<li>${user.fruit} <span class"a">${user.quantity}</span></li>`
        }
        fruitBasketList.innerHTML = text;

        empty.textContent = '';
        console.log(userBasket);
    });
}

for (let i = 0; i < btnRemoveAll.length; i++) {
    btnRemoveAll[i].addEventListener('click', function () {
        userBasket = [];
        fruitBasketList.innerHTML = '';
        empty.textContent = 'Empty';
        console.log(userBasket);
    });
}


