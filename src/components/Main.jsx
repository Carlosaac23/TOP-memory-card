import { useEffect, useState } from 'react';
import pokemons from '../lib/pokemons';
import { getRandomID } from '../utils';
import Card from './Card';

export default function Main() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      for (let i = 0; i < 10; i++) {
        const randomID = getRandomID();
        const randomPokemon = await pokemons(randomID);
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
      <div className='flex flex-wrap gap-2 p-4'>
        {objects.map(({ id, pokemonName, imageURL }) => {
          return (
            <Card key={id} imageURL={imageURL} pokemonName={pokemonName} />
          );
        })}
      </div>
    </section>
  );
}
