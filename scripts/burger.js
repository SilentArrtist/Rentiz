const burger = document.querySelector('.burger');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu__block').cloneNode(1);
burger.addEventListener('click', burgerHandler);
function burgerHandler(e) {
    e.preventDefault();
    document.querySelector('.header').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    popup.classList.toggle('open');
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}