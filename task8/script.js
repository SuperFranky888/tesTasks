// контейнер для квадратов и его стили
let container = document.querySelector('.container');
container.style.width = '600px';
container.style.height = '600px';
container.style.border = '4px solid green'; 
container.style.margin = '0 auto'; 
container.style.display = 'flex';
container.style.flexWrap = 'wrap';

// получает рандомное число
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
let randNum = getRandom(10, 100);

// создает и вставляет рандомное количество квадратов в родительский контейнер
for (let i = 0; i < randNum; i++) {
    container.insertAdjacentHTML('beforeend', `<div class="cube"></div>`);
}

// Добавляет стили всем квадратам
let squares = document.querySelectorAll('.cube');
squares.forEach(square => {
    square.style.border = '1px solid cyan';
    square.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0,255)}, ${getRandom(0,255)})`;
    square.style.width = '30px';
    square.style.height = '30px';
});

