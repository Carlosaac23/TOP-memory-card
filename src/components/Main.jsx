import { useEffect, useState } from 'react';
import fetchPokemons from '../lib/fetch-pokemons';
import { getRandomID } from '../utils';
import Card from './Card';

export default function Main() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      for (let i = 0; i < 6; i++) {
        const randomID = getRandomID();
        const randomPokemon = await fetchPokemons(randomID);
        const {
          sprites: { front_default },
          name,
          id,
        } = randomPokemon;

        setObjects((prevURLs) => [
          ...prevURLs,
          { id, pokemonName: name, imageURL: front_default },
        ]);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <section>
      <div className='px-4 pt-3 text-xl tracking-wide'>
        <p>Score:</p>
        <p>Best Score:</p>
      </div>
      <div className='flex flex-wrap justify-center gap-6 p-4'>
        {objects.map(({ id, pokemonName, imageURL }) => {
          return (
            <Card key={id} imageURL={imageURL} pokemonName={pokemonName} />
          );
        })}
      </div>
    </section>
  );
}
