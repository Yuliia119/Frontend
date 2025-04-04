// ! обработка запроса в async /await с try /catch
const gridContainer = document.getElementById('grid-container')
const loader = document.querySelector('.loader')
const btnReset = document.querySelector('#btn-reset')
const burger = document.getElementById ("burger")
const menu = document.getElementById("menu")

burger.addEventListener("click", ()=>{
menu.classList.toggle("hide")
})
async function getProducts(limit=30) {
  gridContainer.innerHTML="";
  // мы пробуем обработать запрос в блоке try и если получим ошибку то перейдем в блок catch
  try {
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    if (!res.ok) throw new Error (`status :${res.status} ${res.statusText || ''}`)
    const data = await res.json()
    // выключаем loader добавляя ему класс hide
    loader.classList.toggle('hide')
    // этот метод сработает только если класс hide есть у контейнера
    gridContainer.classList.remove('hide')
//console.log(data.products);

    data.products.map(product => {
      const section = document.createElement('section')
      const h2 = document.createElement('h2')
      h2.textContent = product.title
      const img = document.createElement('img')
      img.src = product.thumbnail
      section.append(h2, img)
      gridContainer.append(section)
    })
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}
setTimeout(getProducts, 1500)

btnReset.addEventListener('click', ()=> {
  // убирает hide (когда этот класс есть)
  loader.classList.toggle('hide')
  // добавляет hide (когда этого класса нет)
  gridContainer.classList.toggle('hide')
  setTimeout(getProducts, 1500)
})