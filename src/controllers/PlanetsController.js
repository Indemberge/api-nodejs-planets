const mongoose = require('mongoose');

const Planets = mongoose.model('Planets');

module.exports = {
async index(req, res) {
        const planets = await Planets.find();
        return res.json(planets);
    }
};