function getRandomID() {
  const POKEMONS_IDS = 1000;
  return Math.floor(Math.random() * POKEMONS_IDS + 1);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export { capitalize, getRandomID };
