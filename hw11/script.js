// Задание 1
const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [18, 27, 74, 34];
const people = []
for(let i=0; i<names.length; i++){
     people.push(names[i]+ " "  +  ages[i] +   " лет ");
}
console.log(people)
//document.getElementById('task1').innerText = `1. Результат:: ${people.reduce((acc, el) => acc+el,"" )}`
document.getElementById('task1').innerText = "1. Результат: "+ JSON.stringify(people)  //выводим на экран

// Задание 2
const people1= [...names,...ages];
console.log(people1.reverse())
// или так
const reversedPeople= []
for(let i=people.length-1; i>=0;  i--){
reversedPeople.push(people[i])
}
console.log(reversedPeople)
document.getElementById('task2').innerHTML = `2. Результат: ${reversedPeople}`;

// Задание 3
const fruits = []                             // создали пустой массив
fruits.push(" яблоко", " банан", "апельсин")    // добавили элементы
const lastFruits = fruits.pop()    //удалили последний элемент и сохранили в переменную
fruits.unshift(lastFruits)        // добавили последний элемент в начало массива
console.log(fruits)    // выводим результат
document.getElementById('task3').innerHTML = `3. Результат: ${fruits}`;

//Задание 4
const veggies = [" морковь"," огурец"," помидор"]
const fruitsAndVeggies = [...fruits, ...veggies]
const [first,second,third,...rest] = fruitsAndVeggies
console.log(fruitsAndVeggies)
document.getElementById('task4').innerHTML = `4. Результат: ${fruitsAndVeggies}`

// выводим Результат 1 на экран в столбик
const ul= document.getElementById("list")
//console.log(ul);
people.push("Юля")
people.map(el => {
  const li= document.createElement("li")
  li.innerText= el
  console.log(li)
  ul.append(li)
  //console.log(el);
})
