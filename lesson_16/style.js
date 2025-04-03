// ! реализация на синтаксисе .then()
// fetch('https://rickandmortyapi.com/api/character?page=1')
// .then(res => res.json())
// .then(data => {
//   data.results.map(character => {
//     const section = document.createElement('section')
//     section.textContent = `${character.name} from ${character.location.name}`
//     document.body.append(section)
//   })
// })


// ! реализация на синтаксисе async / await (асинхронные функции)

const gridContainer = document.querySelector('.grid-container')

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=3");
  const data = await res.json();
  data.results.map((character) => {
    const section = document.createElement("section");
    const h2 = document.createElement('h2')
    h2.textContent = `${character.name} from ${character.location.name}`;
    const p = document.createElement('p')
    p.textContent = 'Species:' + character.species + ', status:' + character.status
    const img = document.createElement('img')
    img.src = character.image
    section.append(h2,p,img)

    gridContainer.append(section);
  });
}

getCharacters();