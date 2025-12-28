import { useEffect, useState } from 'react';
import pokemons from '../lib/pokemons';
import { getRandomID } from '../utils';
import Card from './Card';

export default function Main() {
  const [objects, setObjects] = useState([]);
  console.log(objects);

  useEffect(() => {
    async function fetchPokemon() {
      for (let i = 0; i < 10; i++) {
        const randomID = getRandomID();
        const randomPokemon = await pokemons(randomID);
        console.log(randomPokemon);
        const {
          sprites: { front_default },
          name,
        } = randomPokemon;
        setObjects((prevURLs) => [
          ...prevURLs,
          { pokemonName: name, imageURL: front_default },
        ]);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <section>
      <div className='flex flex-wrap gap-2 p-4'>
        {objects.map(({ pokemonName, imageURL }) => {
          return <Card imageURL={imageURL} pokemonName={pokemonName} />;
        })}
      </div>
    </section>
  );
}
