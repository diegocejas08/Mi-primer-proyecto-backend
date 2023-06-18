const { Player } = require('../models/teamDelta')
const axios = require('axios')

class Controller {
    async plantel(req, res) {
        const players = await Player.find()
        res.status(200).json(players)
    };

    async buscarPorApellido(req, res) {
        const player = await Player.find({ apellido: req.params.apellido })
        res.status(200).json(player)
    }

    async buscarPorId(req, res) {
        const player = await Player.findById(req.params.id)
        res.status(200).json(player)
    }

    async crear(req, res) {
        try {
            const playerSave = new Player(req.body);
            await playerSave.save();
            res.status(201).json(playerSave)
        } catch {
            res.status(501).json({ msg: "No se pudo crear jugador por el siguiente problema:" })
        }
    }

    async editar(req, res) {
        await Player.findByIdAndUpdate(req.params.id, req.body)
        res.status(202).json({ msg: "Jugador editado" })
    }

    async eliminar(req, res) {
        await Player.findByIdAndDelete(req.params.id);
        res.json({ msg: "El jugador " + req.params.id + " se borro con exito" })
    };

    async axiosGet (req, res) {
        try {
            const { data, status } = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            res.json({ data, status })
        } catch (error) {
            res.json({ data: error.response.data, status: error.response.status })
        }
    }
};

module.exports = new Controller