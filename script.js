const list = document.querySelector("ul");

function generateBarChart() {
  // Generer et random tal
  let randomNumber = Math.floor(Math.random() * 100 + 1);

  // Generer et li element
  const li = document.createElement("li");

  // Påsæt li element i listen
  list.appendChild(li);

  // sætter css property "--height", som bestemmer farver og højde på li elementet, til vores randomNumber
  li.style.setProperty("--height", `${randomNumber}`);

  if (list.children.lenght > 20) {
    list.removeChild(list.children[0]);
  }
}

setInterval(generateBarChart, 1000);
