const axios = require('axios');
const { Dog, Temperament } = require('../db');

require('dotenv').config();
const { DB_URL, DB_APIKEY } = process.env;



const getDogsBreeds = async (req, res) => {
  try {
    const { id } = req.params
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
        if (id) {
          if (isNaN(id)) {
            let dbbichitos = await Dog.findOne({
              where: { id: id },
              include: [{
                model: Temperament, attributes: ["name"],
                through: {
                  attributes: []
                }
              }],
            })
            
            dbbichitos.temperaments = dbbichitos.temperaments.map(t => t.name)
            res.send(dbbichitos)

            // console.log(dbbichitos, "fdfsd")
            // res.send(dbbichitos)
          } else {
            let dogs = containers.find(n => n.id == id)
            res.send(dogs)
          }
        }
      })

  } catch (error) {
    console.log(error)
    res.send('poké no anda :c')
  }
}

module.exports = { getDogsBreeds }