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
    type: DataTypes.INTEGER,
    },
    breeds:{
      type: DataTypes.STRING,
      varchar: 255
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    life_span:{
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
      varchar: 255,
    },
  },{timestamps: false});
};
