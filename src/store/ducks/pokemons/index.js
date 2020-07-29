import axios from 'axios';

// constants
const INITIAL_DATA = {
  items: [],
};

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const GET_POKE_NEXT_SUCCESS = 'GET_POKE_NEXT_SUCCESS';

const API_URL = 'https://pokeapi.co/api/v2';

// reducer
export default function reducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
  console.log(getState());
  try {
    axios
      .get(`${API_URL}/pokemon?offset=0&limit=20`)
      .then((response) => response.data.results)
      .then((response) =>
        dispatch({
          type: GET_POKEMONS_SUCCESS,
          payload: response,
        })
      )
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};
