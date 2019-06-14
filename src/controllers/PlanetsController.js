const mongoose = require('mongoose');

const Planets = mongoose.model('Planets');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const planets = await Planets.paginate({}, { page, limit: 1 });
        return res.json(planets);
    },

    async findbyid(req, res){
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