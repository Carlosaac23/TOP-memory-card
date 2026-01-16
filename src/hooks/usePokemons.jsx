import { shuffle } from 'lodash';
import { useEffect, useState } from 'react';

import fetchPokemon from '../lib/fetch-pokemon';
import { getRandomID } from '../utils';

function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lastCard, setLastCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const copyPokemons = [];

        while (copyPokemons.length < 12) {
          const randomID = getRandomID();
          const randomPokemon = await fetchPokemon(randomID);
          const isDuplicate = copyPokemons.some(
            pokemon => pokemon.id === randomPokemon.id
          );

          if (!isDuplicate) {
            copyPokemons.push(randomPokemon);
          }
        }

        setPokemons(copyPokemons);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  function handleCardClick(pokemonId) {
    const newPokemons = shuffle([...pokemons]);

    if (pokemonId === lastCard) {
      setScore(0);
      setLastCard(null);
      setPokemons(newPokemons);

      if (score > bestScore) {
        setBestScore(score);
      }

      return;
    }

    setScore(prevScore => prevScore + 1);
    setLastCard(pokemonId);
    setPokemons(newPokemons);
  }

  return { pokemons, score, bestScore, handleCardClick, isLoading };
}

export { usePokemons };
