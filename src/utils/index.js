function getRandomID() {
  const POKEMONS_IDS = 1000;
  return Math.floor(Math.random() * POKEMONS_IDS + 1);
}

export { getRandomID };
