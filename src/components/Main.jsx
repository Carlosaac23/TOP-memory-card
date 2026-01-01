import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';
import fetchPokemons from '../lib/fetch-pokemons';
import { getRandomID } from '../utils';
import Card from './Card';

export default function Main() {
  const [objects, setObjects] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lastCard, setLastCard] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      for (let i = 0; i < 12; i++) {
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

  function handleCardClick(pokemonId) {
    const newObjects = shuffle([...objects]);

    if (pokemonId === lastCard) {
      setScore(0);
      setLastCard(null);
      setObjects(newObjects);

      if (score > bestScore) {
        setBestScore(score);
      }

      return;
    }

    setScore((prevScore) => prevScore + 1);
    setLastCard(pokemonId);
    setObjects(newObjects);
  }

  return (
    <section>
      <div className='px-4 pt-3 text-xl tracking-wide'>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className='flex flex-wrap justify-center gap-6 p-4'>
        {objects.map(({ id, pokemonName, imageURL }) => {
          return (
            <Card
              id={id}
              handleClick={handleCardClick}
              key={id}
              imageURL={imageURL}
              pokemonName={pokemonName}
            />
          );
        })}
      </div>
    </section>
  );
}
