import { BeatLoader } from 'react-spinners';

import { usePokemons } from '../hooks/usePokemons';

import Card from './Card';

export default function Main() {
  const { pokemons, score, bestScore, handleCardClick, isLoading } =
    usePokemons();

  return (
    <section>
      <div className='px-4 pt-3 text-xl tracking-wide'>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className='flex flex-wrap justify-center gap-6 p-4'>
        {isLoading && <BeatLoader color='#404040' />}
        {pokemons &&
          pokemons.map(({ id, name, sprites: { front_default } }) => (
            <Card
              id={id}
              handleClick={handleCardClick}
              key={id}
              imageURL={front_default}
              pokemonName={name}
            />
          ))}
      </div>
    </section>
  );
}
