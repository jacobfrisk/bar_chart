const list = document.querySelector("ul");

const randomNumbers = [];

for (let i = 0; i < 20; i++) {
  const randomNumber = Math.floor(Math.random() * 101);
  randomNumbers.push(randomNumber); // Tilføjer de tilfældige tal til arrayet
  console.log(randomNumber);
}

function appendNumbers(number) {
  const li = document.createElement("li");
  li.style.setProperty("--height", `${number}`);
  list.appendChild(li);
}

// Dette er en anonym funktion da den ikke har noget navn
randomNumbers.forEach((number, index) => {
  setTimeout(() => {
    appendNumbers(number); // setTimeout tager to argumenter. Det ene er hvad den skal delaye
  }, 1000 * index); // Det andet er hvor hurtigt den skal gøre det. Man bruger index til at fortælle hvor den skal køre setTimeout fra.
});
