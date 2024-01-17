import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearchPokemons } from "../../slices/dataSlice";
import './Searcher.css'

const Seacher = () => {
  const dispatch = useDispatch();

  const handleOnChange = ({ target }) => {
    dispatch(setSearchPokemons(target.value));
    target.value = "";
  };
  return (
    <div className='container'>
      <Input.Search
        placeholder="buscar pokemon ..."
        onChange={handleOnChange}
        style={{ marginBottom: 10 }}
      />
      <button className="btn-primary">Buscar</button>
    </div>
  );
};

export default Seacher;
