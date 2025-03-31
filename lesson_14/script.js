const form = document.getElementById("form");
const gridContainer = document.getElementById("grid-container");
//console.log(form, div);
function clearList() {
    while (gridContainer.hasChildNodes()) {
      gridContainer.firstChild.remove();
    }
  }
const filmList = [
    {
      film: "Хоббит",
      author: "Питер Джексон",
      year:"2012",
      foto:"https://hd-rezka.one/uploads/posts/2017-04/1491408273-1577353869-hobbit-nezhdannoe-puteshestvie.jpg"
    },
    {
        film: "Властелин Колец",
        author: "Питер Джексон",
        year:"2001",
        foto:"https://hd-rezka.tv/uploads/mini/fullstory-short/a1e/de706f7353a45c1e6eed71a62dce6.png"
    },
    {
        film: "Звёздные войны",
        author: "Джорж Лукас",
        year:"1977",
        foto:"https://lordfilms-zvezdnye-voyny.ru/wp-content/uploads/2023/11/300x450-3-2.webp"
    }
];
const changeStatus = (event) => {
    if (event.target.style.textDecoration === 'line-through') {
      event.target.style.textDecoration = 'none'
    } else {
      event.target.style.textDecoration = 'line-through'
    }
}
function createList() {
    gridContainer.innerHTML="";
    filmList.forEach((el, index) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.innerHTML = "&times;";  // крестик
      deleteBtn.addEventListener("click", () => {
        filmList.splice(index, 1);   //удаляем фильм из массива
        createList();
      })

      const img = document.createElement("img");
      img.src = el.foto;
      img.alt = el.film;
      
      const h2 = document.createElement("h2");
      h2.innerText = `${el.film}: ${el.author}: ${el.year}`;
      
      gridItem.append (deleteBtn, img, h2);
      gridContainer.append(gridItem);
    });
}
  createList()

//Добавление нового фильма
form.addEventListener("submit", function (event){
    event.preventDefault();
    const newFilm ={
        film:form.film.value.trim(),
        author:form.author.value.trim(),
        year:form.year.value.trim(),
        foto:form.foto.value.trim()
    }

    const check = filmList.find((el) => el.film === newFilm.film && el.author === newFilm.author);

    if (check) {
    alert("Этот фильм уже добавлен!");
  } else {
    filmList.push(newFilm);
    clearList();
    createList();
  }
    form.reset();
}); 

//Очищаем список
document.getElementById("clear-all").addEventListener("click", function(){
    filmList.length = 0;
    clearList();
});





