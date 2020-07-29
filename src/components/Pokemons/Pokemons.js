import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsAction } from '../../store/ducks/pokemons';

const Pokemons = () => {
  const dispatch = useDispatch();
  const { pokemons } = useSelector((store) => store.pokemon);

  useEffect(() => {
    dispatch(getPokemonsAction());
  }, []);

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default Pokemons;
