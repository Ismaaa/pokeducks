import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Pokemons from './components/Pokemons';

function App() {
  return (
    <Provider store={store}>
      <Pokemons />
    </Provider>
  );
}

export default App;
