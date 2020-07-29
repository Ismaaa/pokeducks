import axios from 'axios';

// constants
const INITIAL_STATE = {
  pokemons: [],
  page: 0,
  error: null,
};

const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR';
const NEXT_POKEMONS_PAGE = 'NEXT_POKEMONS_PAGE';
const PREVIOUS_POKEMONS_PAGE = 'PREVIOUS_POKEMONS_PAGE';

const API_URL = 'https://pokeapi.co/api/v2';

// reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return { ...state, pokemons: action.payload };
    case GET_POKEMONS_ERROR:
      return { ...state, error: action.payload };
    case NEXT_POKEMONS_PAGE:
      return { ...state, page: state.page + 1 };
    case PREVIOUS_POKEMONS_PAGE: {
      // console.log(state.page);
      // const page = state.page > 0 ? state.page - 1 : state.page;
      // console.log(page);
      return { ...state, page: state.page - 1 };
    }
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

export const getPokemons = () => async (dispatch, getState) => {
  const { page } = getState().pokemon;

  axios
    .get(`${API_URL}/pokemon?offset=${page}&limit=20`)
    .then((response) => response.data.results)
    .then((response) => {
      dispatch({
        type: GET_POKEMONS_SUCCESS,
        payload: response,
      });
    })
    .catch((error) => dispatch(setApiError(error)));
};

export const getNextPokemonsPage = () => async (dispatch) => {
  dispatch({
    type: NEXT_POKEMONS_PAGE,
  });
  dispatch(getPokemons());
};

export const getPreviousPokemonsPage = () => async (dispatch) => {
  dispatch({
    type: PREVIOUS_POKEMONS_PAGE,
  });
  dispatch(getPokemons());
};
