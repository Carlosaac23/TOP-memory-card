export default async function pokemons(id) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        `${res.status} ${res.statusText}: ${errorData.message || ''}`,
      );
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
