import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonsAction } from '../../store/ducks/pokemons';

const Pokemons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsAction());
  }, []);

  return <ul />;
};

export default Pokemons;
