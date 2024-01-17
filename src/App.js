import "./App.css";
import { Col, Spin } from "antd";
import Seacher from "./components/Searcher/Searcher";
import PokemonList from "./components/PokemonList/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { getPokemon } from "./api";
// import { connect } from 'react-redux';
// import {setPokemons as setPokemonsActions } from './actions'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails, setLoading } from "./actions";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import { isPending } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import Thems from "./Theme/Themes";
import { Switch } from "./components/Switch/Switch";
// import { Thems } from "./Theme/Themes";

function App() {
  const pokemons = useSelector(
    (state) => state.data.searchPokemons,
    shallowEqual
  );
  // state.getIn(['data','pokemons'])).toJS();
  // importante obtener el valor con get

  const loading = useSelector((state) => state.ui.loading, shallowEqual);
  // state.getIn(["ui", "loading"]));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    //  <ThemeProvider theme={Thems["light"]}>
    <body className="App">
      <div data-theme="dark">
        <div className="header">
          <Col span={2} offset={10}>
            <img src={logo} alt="logo" />
          </Col>
          <Col span={2} offset={10}>
            <Switch />
          </Col>
        </div>

        <Col span={8} offset={8}>
          <Seacher />
        </Col>
        {loading ? (
          <Col offset={12}>
            <Spin spinning size="large"></Spin>
          </Col>
        ) : pokemons.length > 0 ? (
          <PokemonList pokemons={pokemons} />
        ) : (
          <div className="alert">
            Upps no encontramos el pokemon que buscas{" "}
          </div>
        )}
      </div>
    </body>
    //  </ThemeProvider>
  );
}

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons
// })

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App) ;
export default App;
