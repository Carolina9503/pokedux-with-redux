import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";
// video 18 donde cambiamos la extructura para trabajar con la libreria immutable
const inicialState = fromJS({
  loading: false,
});

export const uiReducer = (state = inicialState, action) => {
  console.log("🚀 ~ file: pokemons.js:10 ~ pokemonsReducer ~ state:", state);
  switch (action.type) {
    case SET_LOADING:
      // return { ...state, loading: action.payload };
      return state.setIn(["loading"], action.payload);
    default:
      return state;
  }
};
