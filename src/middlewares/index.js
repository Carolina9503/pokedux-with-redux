// El middlewares que crearemos lo que queremos hacer es que cada vez que se dispare una accion
// yo pueda obtener la informacion de esa accion y hacer un console.log de la misma

export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

// middleware para crear un pokemon personalizado
export const featurin = (store) => (next) => (actionInfo) => {
  const featured = [
    {
      name: "eddie",
      sprites: {
        front_default:
          "https://images.wikidexcdn.net/mwuploads/wikidex/0/02/latest/20221113131941/Ash_%28Viajes_Pok%C3%A9mon%29_2.png",
      },
    },
    ...actionInfo.action.payload,
  ];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
};
