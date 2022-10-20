const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      varchar: 255,
    },
    height: {
    type: DataTypes.STRING,
    varchar: 255,
    },
    breeds:{
      type: DataTypes.STRING,
      varchar: 255
    },
    weight: {
      type: DataTypes.STRING,
      varchar: 255,
    },
    life_span:{
      type: DataTypes.STRING,
      varchar: 255,
    },
    image: {
      type: DataTypes.STRING,
      varchar: 255,
    },
  },{timestamps: false});
};
