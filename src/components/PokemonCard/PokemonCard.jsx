import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { StartButton } from "../StartButton/StartButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";

const PokemonCard = ({ name, img, abilities, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typeString = types.map((item) => item.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={img} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={ handleOnFavorite} />}
    >
      <Meta description={typeString} />
      {/* {abilities &&  abilities.map((abilitie) => (
        <Meta key={abilitie.slot} description={abilitie.name} />
      ))} */}
    </Card>
  );
};

export default PokemonCard;
