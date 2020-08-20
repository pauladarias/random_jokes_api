const setupDiv = document.getElementById("setup");
const punchlineDiv = document.getElementById("punchline");
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn");

// Setup an async function called getJoke
// Create a variable called jokePromise that fetches a joke
//from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data

async function getJoke() {
  const jokePromise = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
  const joke = await jokePromise.json();
  // Get the setup from the joke and insert it into the setupDiv element
  joke.forEach((joke) => {
    //const div = document.createElement("div");
    setupDiv.innerHTML = joke.setup;
    //document.body.appendChild(div);
  });
}

getJoke();
