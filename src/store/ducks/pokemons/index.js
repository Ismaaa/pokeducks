import axios from 'axios';

// constants
const INITIAL_DATA = {
  pokemons: [],
  error: null,
};

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const GET_POKE_NEXT_SUCCESS = 'GET_POKE_NEXT_SUCCESS';
const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR';

const API_URL = 'https://pokeapi.co/api/v2';

// reducer
export default function reducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return { ...state, pokemons: action.payload };
    case GET_POKEMONS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// actions
export const setApiError = (error) => (dispatch) => {
  dispatch({
    type: GET_POKEMONS_ERROR,
    payload: error,
  });
};

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
      .catch((error) => dispatch(setApiError(error)));
  } catch (error) {
    dispatch(setApiError(error));
  }
};
