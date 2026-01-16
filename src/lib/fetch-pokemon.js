export default async function fetchPokemon(pokemonId) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  if (!res.ok) {
    throw new Error(`HTTP error: Status ${res.status}`);
  }
  const data = await res.json();
  return data;
}
