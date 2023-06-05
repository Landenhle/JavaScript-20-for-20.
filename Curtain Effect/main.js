const menu = document.getElementById('menu');
const box1 = document.getElementById('box-one');
const box2 = document.getElementById('box-two');

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    box1.classList.toggle('left');
    box2.classList.toggle('right');
})