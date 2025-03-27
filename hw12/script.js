const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
    ];
    
    // Task 1
    const starWarsHeroesNew = (list) => {
    return list.map((el) => ({ name: el.name, isJedi: el.isJedi }));
    };
    
    // console.log(starWarsHeroesNew(starWarsHeroes));
    
    // Task 2
    const starWarsHeroesYung = starWarsHeroes.filter((el) => el.age < 40);
    
    // console.log(starWarsHeroesYung);
    
    function sumOfStarWarsHeroes(list) {
    return list
    .filter((el) => el.isJedi === true)
    .map((el) => el.age)
    .reduce((acc, current) => acc + current, 0);
    }
    
    // console.log(sumOfStarWarsHeroes(starWarsHeroes));
    
    // Task 3
    
    const starWarsHeroesGrownUp = starWarsHeroes.map((el) => el.age + 10);
    
    // console.log(starWarsHeroesGrownUp);
    