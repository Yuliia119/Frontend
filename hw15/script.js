document.addEventListener("DOMContentLoaded", () => {     //полностью загружает HTML
  
  const foxImage = document.getElementById("fox-image");
  const button = document.getElementById("fetch-fox");

  function fetchFox() {
    fetch("https://randomfox.ca/floof/")
      .then((res) => {
        // если поле ok - в положении false мы переходим к блоку catch отрабатывающего ошибку
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      // если все хорошо обрабатываем данные
      .then((data) => {
        foxImage.src = data.image;
      })
      // если ошибка показываем ее в консоли
      .catch((error) => {
        console.error(error);
        const h2 = document.createElement("h2");
        h2.textContent = error.message;
        document.body.append(h2);
      });
  }
  button.addEventListener("click", fetchFox);
  fetchFox();
});
