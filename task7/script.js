// toggle класса active для 3х элементов на странице (для открытия-закрытия элементов).
function showElements(){
       document.querySelectorAll('.clickedElement > div').forEach(el => {
        el.classList.toggle('active');
    });
}

// ф-ия предотвращающая выполнение другой ф-ии в определенном промежутке времени
// f - функция callBack, которую необходимо выполнить; 
// ms - задержка, в течении которой выполнение f будет проигнорировано
function debounce(f, ms) {
    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
  }

// замыкаем функцию debounce для передачи ее на нужное нам событие; 
// открывает-скрывает элементы
// в течении 1000мс(можно указать любое число), повторный вызов forDebonce проигнорируется
let forDebounce = debounce(showElements, 1000);
document.querySelector('.clickedElement').onclick = forDebounce;
