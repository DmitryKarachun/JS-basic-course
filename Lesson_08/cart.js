'use strict';
const basketEl = document.querySelector('.basket');
let basketContent = document.querySelector('.basketContent');
let basketTotalValue = basketEl.querySelector('.basketTotalValue');
let basket = {};

document.querySelector('.featuredItems').addEventListener('click', event => {
	if (event.target.tagName !== 'BUTTON') {
		return;
	}

	let name = event.target.closest('.featuredItem').dataset.name;
	let price = +event.target.closest('.featuredItem').dataset.price;
	let idProduct = +event.target.closest('.featuredItem').dataset.id;
	
	addToCart(idProduct, name, price)
});

document.querySelector('.cartIcon').addEventListener('click', event => {
	basketEl.classList.toggle('hidden');
});

function addToCart(id, name, price) {
	if (!(id in basket)) {
		basket[id] = {id: id, name: name, price: price, count: 0}
		
	}
	basket[id].count += 1;
	render(id);
}

function render(id) {
	let productId = basketContent.querySelector(`.productId[data-id="${id}"`);
	if (!productId) {
		renderNewProduct(id);
		return;
	}
	basketContent.querySelector('.dataCount').textContent = basket[id].count;
	basketContent.querySelector('.totalPrice').
	textContent = basket[id].count * basket[id].price;


function renderNewProduct(id) {
	const product = `<div class="productId" data-id="${id}">
		<p>${basket[id].name}</p>
      <p class="dataCount">${basket[id].count}</p>
      <p>${basket[id].price}</p>
      <p class="totalPrice">${basket[id].count * basket[id].price}</p>
		</div>
		`;
		basketContent.insertAdjacentHTML("beforeEnd", product);
}

