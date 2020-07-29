import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getNextPokemonsPage,
  getPokemons,
  getPreviousPokemonsPage,
} from '../../store/ducks/pokemons';

const Pokemons = () => {
  const dispatch = useDispatch();
  const { pokemons, page } = useSelector((store) => store.pokemon);

  const renderLoadPokemons = () => {
    if (pokemons.length === 0) {
      return (
        <button type="button" onClick={() => dispatch(getPokemons())}>
          Load pokemons
        </button>
      );
    }

    return <div />;
  };

  const renderPreviousPage = () => {
    if (page > 0) {
      return (
        <button
          type="button"
          onClick={() => dispatch(getPreviousPokemonsPage())}
        >
          Previous Page
        </button>
      );
    }

    return <div />;
  };

  const renderNextPage = () => {
    if (pokemons.length > 0 && page > -1) {
      return (
        <button type="button" onClick={() => dispatch(getNextPokemonsPage())}>
          Next Page
        </button>
      );
    }

    return <div />;
  };

  const renderPokemons = () => (
    <ul>{pokemons && pokemons.map((pokemon) => <li>{pokemon.name}</li>)}</ul>
  );

  return (
    <div>
      {renderLoadPokemons()}
      {renderPreviousPage()}
      {renderNextPage()}
      {renderPokemons()}
    </div>
  );
};

export default Pokemons;
