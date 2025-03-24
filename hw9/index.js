// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";
clonedBtn.textContent = "Я изменю тебя";
clonedBtn.style.backgroundColor = "#a78b71";
clonedBtn.style.color = "white";
clonedBtn.classList.add("second-btn");

btn.addEventListener('click', () => {   // клик на первую кнопку
  document.body.appendChild(clonedBtn);  // добавляем вторую кнопку в body
  
});

clonedBtn.addEventListener(`click`, () => {   // клик на вторую кнопку
  btn.style.backgroundColor = "#9c4a1a";     // меняем фон первой кнопки
  btn.style.color = "black";                 // меняем цвет текста
})

