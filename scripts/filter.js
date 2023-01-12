const items = document.querySelectorAll('.filter');
items.forEach(item => {
    item.addEventListener('click', event => {
        item.querySelector('.variants').classList.toggle('active')
        item.querySelector('.arrow').classList.toggle('active')
        if (event.target.classList.contains('variant')) {
            item.querySelector('.selected_value').textContent = event.target.textContent;
        }
    })
})