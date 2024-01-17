import { fromJS } from "immutable";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";
// video 18 donde cambiamos la extructura para trabajar con la libreria immutable
const inicialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (state = inicialState, action) => {
  console.log("🚀 ~ file: pokemons.js:10 ~ pokemonsReducer ~ state:", state);
  // switch (action.type) {
  //   case SET_POKEMONS:
  //     // return { ...state, pokemons: action.payload };
  //     return state.setIn(["pokemons"], fromJS(action.payload));

  //   case SET_SEARCH:
  //     return state.setIn(["pokemons"], fromJS(action.payload));

  //   case SET_FAVORITE:
  //     // const newPokemonsList = [...state.pokemons];
  //     // const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
  //     //   return pokemon.id === action.payload.pokemonId;
  //     // });

  //     const currentPokemonIndex = state.get("pokemons").findIndex((pokemon) => {
  //       return pokemon.get("id") === action.payload.pokemonId;
  //     });

  //     if (currentPokemonIndex < 0) {
  //       return state;
  //     }

  //     // newPokemonsList[currentPokemonIndex].favorite =
  //     //   !newPokemonsList[currentPokemonIndex].favorite;

  //     // trabajando con immutable
  //     // const isFavorite = state.get('pokemons').get('currentPokemonIndex').get('favorite');

  //     const isFavorite = state.getIn([
  //       "pokemons",
  //       currentPokemonIndex,
  //       "favorite",
  //     ]);

  //     // return { ...state, pokemons: newPokemonsList };
  //     return state.setIn(
  //       ["pokemons", currentPokemonIndex, "favorite"],
  //       !isFavorite
  //     );

  //   default:
  //     return state;
  // }
};
