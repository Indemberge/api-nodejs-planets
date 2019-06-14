const mongoose = require('mongoose');

const Planets = mongoose.model('Planets');

module.exports = {
    async index(req, res) {
        const planets = await Planets.find();
        return res.json(planets);
    },

    async show(req, res){
        const planet = await Planets.findById(req.params.id);
        return res.json(planet);
    },

    async store(req, res) {
        const planet = await Planets.create(req.body);
        return res.json(planet);
    },

    async update(req, res) {
        const planet = await Planets.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(planet);
    },

    async destroy(req, res) {
        await Planets.findByIdAndRemove(req.params.id);
        return res.send();
    }
};