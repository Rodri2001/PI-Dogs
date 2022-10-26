const axios = require('axios');
require('dotenv').config();
const { DB_APIKEY, DB_URL } = process.env;
const { Dog, Temperament } = require("../db")
const { Op } = require("sequelize")



const getAllDogs = async (req, res) => {
  try {
    const { name } = req.query
    await axios.get(DB_URL + "?api_key=" + DB_APIKEY)
      .then(async response => {
        let resp = response.data
        let containers = []
        for (let i = 0; i < resp.length; i++) {
          let dogis = {
            id: resp[i].id,
            name: resp[i].name,
            breeds: resp[i].bred_for,
            temperaments: resp[i].temperament?.split(", ").map(e => e.trim()).map(t => t = { name: t }),
            life_span: resp[i].life_span,
            image: resp[i].image.url,
            height: resp[i].height.imperial,
            weight: resp[i].weight.imperial,
          }
          containers.push(dogis)
        }
        if (name) {
          let dogs = containers.filter(n => n.name.toLowerCase().includes(name.toLowerCase()))
          let dbbichitos = await Dog.findAll({
            where: {
              name: {
                [Op.iLike]: `%${name}%`,
              },
            },
            include: [{
              model: Temperament, attributes: ["name"],
              through: {
                attributes: []
              }
            }],
          })

          dogs = dogs.concat(dbbichitos)
          res.send(dogs)
        } else {
          let dsbichitos = await Dog.findAll({
            include: [{
              model: Temperament, attributes: ["name"],
              through: {
                attributes: []
              }
            }],
          })

          containers = containers.concat(dsbichitos)
          res.send(containers)
        }
      })

  } catch (error) {
    res.send('No se encontro el perrito')
    console.log(error)
  }
}


module.exports = { getAllDogs }