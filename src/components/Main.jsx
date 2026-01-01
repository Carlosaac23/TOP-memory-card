import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import fetchPokemons from '../lib/fetch-pokemons';
import { getRandomID } from '../utils';
import Card from './Card';

export default function Main() {
  const [objects, setObjects] = useState([]);
  const [counter, setCounter] = useState(0);
  const [lastCard, setLastCard] = useState('');

  useEffect(() => {
    async function fetchPokemon() {
      for (let i = 0; i < 6; i++) {
        const randomID = getRandomID();
        const randomPokemon = await fetchPokemons(randomID);
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

  function handleCardClick(pokemonName) {
    const newObjects = shuffle([...objects]);

    if (pokemonName === lastCard) {
      setCounter(0);
      setLastCard('');
      setObjects(newObjects);
      return;
    }

    setCounter((prevCounter) => prevCounter + 1);
    setLastCard(pokemonName);
    setObjects(newObjects);
  }

  return (
    <section>
      <div className='px-4 pt-3 text-xl tracking-wide'>
        <p>Score: {counter}</p>
        <p>Best Score:</p>
      </div>
      <div className='flex flex-wrap justify-center gap-6 p-4'>
        {objects.map(({ pokemonName, imageURL }) => {
          return (
            <Card
              handleClick={handleCardClick}
              key={pokemonName}
              imageURL={imageURL}
              pokemonName={pokemonName}
            />
          );
        })}
      </div>
    </section>
  );
}
