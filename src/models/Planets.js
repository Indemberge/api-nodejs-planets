const mongoose = require('mongoose');

const PlanetsSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
climate: {
    type: String,
    required: true,
},
terrain: {
    type: String,
    required: true,
},
films: {
    type: Number,
    required: true,

},
CreatedAt: {
    type: Date,
    default: Date.now,
},
});

mongoose.model('Planets', PlanetsSchema);