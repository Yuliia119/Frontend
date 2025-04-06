// ! обработка запроса в async /await с try /catch
const gridContainer = document.getElementById("grid-container");
const loader = document.querySelector(".loader");
const form = document.getElementById("product-form");
const input = document.getElementById("limit");

async function getProducts(limit = 20) {
  gridContainer.innerHTML = ""; // очистка контейнера
  // мы пробуем обработать запрос в блоке try и если получим ошибку то перейдем в блок catch
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=" + limit);
    // проверяем поле ok у значений 'сырых' данных, которые получили
    if (!res.ok) throw new Error(`status :${res.status} ${res.statusText || ""}`);
    const data = await res.json();
    // выключаем loader добавляя ему класс hide
    loader.classList.toggle("hide");
    // этот метод сработает только если класс hide есть у контейнера
    gridContainer.classList.remove("hide");

    data.forEach((product) => {
      const section = document.createElement("section");
      const h2 = document.createElement("h2");
      h2.textContent = product.title;
      const img = document.createElement("img");
      img.src = product.image;
      section.append(h2, img);
      gridContainer.append(section);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const limit = input.value;
  getProducts(limit);
});

setTimeout(() => getProducts(5), 3000); // загружаем 5 товаров через 3 сек
