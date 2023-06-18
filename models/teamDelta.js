const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const teamDeltaSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: true
    },
    posicíon:{
        type: String,
        required: true
    },
    altura:{
        type:Number,
        required: true
    },
    peso:{
        type: Number,
        required: true
    },
    img:{
        type: String,
    },
    disponible:{
        type: Boolean,
        require: true,
    }
});

teamDeltaSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        ret.disponible = ret.disponible ? 'si' : 'no';
    }
});

const Player = mongoose.model('Player', teamDeltaSchema);

module.exports = {Player};