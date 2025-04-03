// задание

// На отдельной странице добавьте отображение данных для нашей API `https://api.genderize.io/?name=alla`

// 1. Сделайте верстку которая бы показывала данные по своему имени на странице.
// 2. Добавьте форму, чтобы можно было подставлять в запрос разные данные и в ответе по нажатию кнопки получать информацию по разным именам.


const container=document.getElementById("container-gender")
const form= document.getElementById("form-gender")

// ЗАПРОС
async function getCheckName(hero) {
    const res = await fetch("https://api.genderize.io/?name=" + hero);
    const data = await res.json();
    if (data.gender === null) {
        container.textContent = "No valid name for analyze! 🙇‍♂️ try another one!";
      } else {
        container.textContent = `${data.name} is ${data.gender === "male" ? "💁‍♂️" : "🙋‍♀️"} ${data.probability * 100}%`;
      }
  }
  
  // СОБЫТИЕ
  form.addEventListener("submit", (event)=> {
      event.preventDefault()
      const person= event.target.name.value
      console.log(person);
      
      getCheckName(person)
  } )