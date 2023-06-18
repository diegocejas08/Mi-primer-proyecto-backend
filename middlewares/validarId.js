const { Player } = require('../models/teamDelta');

class validar {
    //validacion Id
    async validarId(req, res, next) {
        try {
            const player = await Player.findById(req.params.id);
            if (player !== null) {
                next();
            } else {
                res.status(500).json({ msg: "Id invalido" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    };

    //validacion Apellido
    async validarApellido(req, res, next) {
        try {
            const player = await Player.find({apellido: req.params.apellido});
            if (Array.isArray(player) && player.some(p => p.apellido === req.params.apellido)) {
                next();
            } else {
                res.status(500).json({ msg: "Apellido invalido" });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    };
};
module.exports = new validar 