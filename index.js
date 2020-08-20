const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");
let punchline;

punchlineBtn.addEventListener("click", getPunchline);
// Add an event listener for the new joke button. When clicked it should call the getJoke function
newJokeBtn.addEventListener("click", getJoke);

function getPunchline() {
  punchlineDiv.innerHTML = punchline;
  punchlineDiv.classList.add("bubble");
  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const joke = await jokePromise.json();

  setupDiv.innerHTML = joke[0].setup;

  punchline = joke[0].punchline;
  // Clear the punchline div and remove the "bubble" class from the punchline div
  punchlineDiv.innerHTML = "";
  punchlineDiv.classList.remove("bubble");

  punchlineBtn.classList.toggle("hidden");
  newJokeBtn.classList.toggle("hidden");
}

getJoke();
