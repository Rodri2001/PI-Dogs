const { Dog, Temperament } = require("../db")


const postDogs = async (req, res) => {
    try {
        let { name, height, weight, life_span, breeds, temperaments, image } = req.body
        let results = await Dog.create({
            name,
            height,
            weight: weight + " - " + weight + 3,
            life_span,
            breeds,
            image,
            createInDb: true
        })
        temperaments.forEach(async temperament => {
            let temperamentFound = await Temperament.findOne({
                where: { name: temperament },
            })
            results.addTemperament(temperamentFound)
        }
        )
        res.send(results)
    } catch (error) {
        console.log(error)
    }
}


module.exports = { postDogs }