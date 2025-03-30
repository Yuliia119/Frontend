// * 1. нашли интерактивные элементы
const form = document.getElementById("form-todo");
const ul = document.getElementById("list-todo");

// создаем функцию очистки элементов списка
function clearList() {
  // пока у ul есть дочерние элементы удаляй первый элемент
  while (ul.hasChildNodes()) {
    ul.firstChild.remove();
  }
}

// создаем очистку самого списка
const clearButton = document.querySelectorAll("btn-todo:last-of-type");
clearButton.addEventListener("click", clearList);

// * 2. создали массив под список задач
const taskList = [
  {
    book: "Гарри Поттер",
    author: "Джоан Роулинг"
  },
  {
    book: "Приключения Оливера Твиста",
    author: "Чарльз Диккенс"
  },
  {
    book: "Алхимик",
    author: "Пауло Коэльо"
  }
];

// создаем функцию изменения стилей для элементов списка
const changeStatus = (event) => {
  if (event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = 'none'
  } else {
    event.target.style.textDecoration = 'line-through'
  }
}

// создаем функцию для добавления элементов списка из массива
function createList() {
  taskList.map((el) => {
    const li = document.createElement("li");
    li.innerText = `${el.book}: ${el.author}`;
    // вешаем функцию changeStatus на элемент списка по свойству onclick (аналог слушателя событий)
    // т.е. changeStatus() сработает по клику на элемент
    li.onclick = changeStatus
    // добавляем элемент li к родителю ul
    ul.append(li);
  });
}

// * 3. вызываем ранее созданную функцию и выводим элементы на странице
createList();

// * 4. создаем слушатель событий по нажатию на кнопку для формы по событию submit
form.addEventListener("submit", (event) => {
  // предотвращаем отправку формы и перезагрузку страницы по умолчанию
  event.preventDefault();

  // создаем для удобства объект со значениями из формы
  let task = {
    book: event.target.book.value.toLowerCase(),
    author: event.target.author.value.toLowerCase()
  };
  // очищаем значения в форме
  event.target.book.value = "";
  event.target.author.value = "";

  // добавляем проверку на наличие в массиве
  // если check не пустой - значит такой элемент уже есть
  const check = taskList.find((el) => el.book === task.book && el.author === task.author);

  if (check) {
    alert("Эта книга уже в списке!");
  } else {
    // добавляем новый элемент в массив
    taskList.push(task);

    // очищаем ul от элементов предыдущего вызова
    clearList();

    // снова создаем список элементов
    createList();
  }
});