const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
    ];
    
    // Задание 1 - создаем новый массив с элнментами: name и isJedi
    const starWarsHeroesNew = (list) => {
    return list.map((el) => ({ name: el.name, isJedi: el.isJedi }));
    };
    console.log(starWarsHeroesNew(starWarsHeroes));
    document.getElementById('task1').innerText = "1. Результат: "+ JSON.stringify(starWarsHeroesNew(starWarsHeroes))  //выводим на экран
    
    // Задание 2 - новый массив с isJedi младше 40 лет
    const starWarsHeroesYung = starWarsHeroes.filter((el) => el.age < 40);
    console.log(starWarsHeroesYung);
    document.getElementById('task2').innerText = "2. Результат: "+ JSON.stringify(starWarsHeroesYung)  //выводим на экран
    
    // Задание 3 - суммируем возраст всех джидаев (isJedi = true)
    function sumOfStarWarsHeroes(list) {
    return list
    .filter((el) => el.isJedi === true)
    .map((el) => el.age)
    .reduce((acc, current) => acc + current, 0);
    }
    console.log(sumOfStarWarsHeroes(starWarsHeroes));
    document.getElementById('task3').innerText = "3. Результат: "+ JSON.stringify(sumOfStarWarsHeroes(starWarsHeroes))  //выводим на экран
    
    // Задание 4 - повышаем возраст героев на 10 лет
    const starWarsHeroesGrownUp = starWarsHeroes.map((el) => el.age + 10);
    console.log(starWarsHeroesGrownUp);
    document.getElementById('task4').innerText = "4. Результат: "+ JSON.stringify(starWarsHeroesGrownUp)  //выводим на экран

    // Задание 5 - создаём новый массив, где "Anakin Skywalker" заменен на:`{ name: "Darth Vader", isJedi: false, age: 50 }`
    function starWarsHeroesDarkSide(list) {
    const result = list.slice(1);
    result.unshift({ name: "Darth Vader", isJedi: false, age: 50 });
    return result;
    }
    console.log(starWarsHeroesDarkSide(starWarsHeroes));
    document.getElementById('task5').innerText = "5. Результат: "+ JSON.stringify(starWarsHeroesDarkSide(starWarsHeroes))  //выводим на экран

    