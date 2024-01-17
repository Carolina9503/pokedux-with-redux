import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  searchPokemons: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    // dispatch loader
    // fetch
    // dispatch loader
    dispatch(setLoading(true));
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.searchPokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.searchPokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.searchPokemons[currentPokemonIndex].favorite;

        state.searchPokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    setSearchPokemons: (state, action) => {
      console.log('llego aqui ');
      const pokemonFilter = state.pokemons.filter(pokemon =>
        pokemon.name.includes(action.payload)
      );
      state.searchPokemons = pokemonFilter;
    },
  },
});

export const { setPokemons, setFavorite, setSearchPokemons } = dataSlice.actions;
// console.log("🚀 ~ file: dataSlice.js:30 ~ dataSlice:", dataSlice);

export default dataSlice.reducer;
