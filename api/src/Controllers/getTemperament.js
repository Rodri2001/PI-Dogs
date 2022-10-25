const axios = require('axios');
const Dog = require('../models/Dog');
const { Temperament } = require('../db')
require('dotenv').config();
const { DB_APIKEY, DB_URL } = process.env;


const getTemperament = async (req, res) => {
  try {
    await axios.get(DB_URL + "?api_key=" + DB_APIKEY)
      .then(async response => {
        let resp = response.data
        let containers = []
        for (let i = 0; i < resp.length; i++) {
          let dogis = resp[i].temperament
          containers.push(dogis)
        }
        console.log(containers,2)
        containers = containers.map(e => e = e?.split(','))
        containers = containers.flat().sort()
        containers = containers.map(e => e = e?.replace(' ', ''))
        containers = containers.filter((item, index) => containers.indexOf(item) === index);
        let temperaments = containers.map((t) => {
          return { name: t }
        })
        temperaments = temperaments.filter(t => t.name !== undefined)
        console.log(temperaments)

        temperaments.forEach(
          temperament => {
            Temperament.findOrCreate({
              where: {
                name: temperament.name
              }
            })
          })
        let dogsTemperament = await Temperament.findAll();
        return res.send(dogsTemperament)
      })

  } catch (error) {
    console.log(error)
    res.send('poke no anda :c')
  }
}


module.exports = { getTemperament }
