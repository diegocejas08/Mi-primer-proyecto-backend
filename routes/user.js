const express = require('express')
const router = express.Router()
const controller = require('../controller/userController');
const validar = require("../middlewares/validarId")
const {validarChecks} = require("../middlewares/validarChecks");
const checkEditar = require('../middlewares/checks');
const checkCrear = require('../middlewares/checks');


router.get('/plantel', controller.plantel)
router.get('/axios', controller.axiosGet)
router.get('/buscar/:apellido', validar.validarApellido, controller.buscarPorApellido)
router.get('/search/:id', validar.validarId, controller.buscarPorId)
router.post('/crear', checkCrear,validarChecks, controller.crear)
router.put('/editar/:id', checkEditar, validarChecks, validar.validarId, controller.editar)
router.delete('/eliminar/:id', validar.validarId, controller.eliminar)

module.exports = router