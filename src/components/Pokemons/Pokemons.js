import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAction } from '../../store/ducks/pokemons';

const Pokemons = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((store) => store.pokemon);

  return (
    <div>
      <button type="button" onClick={() => dispatch(getPokemonsAction())}>
        Load Pokemons
      </button>
      <ul>{pokemons && pokemons.map((pokemon) => <li>{pokemon.name}</li>)}</ul>
    </div>
  );
};

export default Pokemons;
