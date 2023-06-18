const { check } = require('express-validator')

//validaziones para la creacion de jugadores
const checkCrear = [
    check("nombre")
        .not().isEmpty().withMessage("El campo nombre es requerido")
        .isString().withMessage("El valor debe ser un string"),
    check("apellido")
        .not().isEmpty().withMessage("El campo apellido es requerido")
        .isString().withMessage("El valor debe ser un string"),
    check("edad")
        .not().isEmpty().withMessage("El campo edad es requerido")
        .isNumeric().withMessage("El valor debe ser un numero"),
    check("posicíon")
        .not().isEmpty().withMessage("El campo posicion es requerido")
        .isString().withMessage("El valor debe ser un string"),
    check("altura")
        .not().isEmpty().withMessage("El campo altura es requerido")
        .isNumeric().withMessage("El valor debe ser un numero"),
    check("peso")
        .not().isEmpty().withMessage("El campo peso es requerido")
        .isNumeric().withMessage("El valor debe ser un numero"),
    check("disponible")
        .not().isEmpty().withMessage("El campo disponible es requerido")
        .isBoolean().withMessage("El valor debe ser un boolean")
];
//Validaciones de los datos que se envian al momento de actualizar
 const checkEditar = [
    check("nombre")
        .not().isEmpty().withMessage("El campo nombre es requerido para editar el jugador")
        .isString().withMessage("El valor debe ser un string"),
    check("apellido")
        .not().isEmpty().withMessage("El campo apellido es requerido para editar el jugador")
        .isString().withMessage("El valor debe ser un string"),
    check("edad")
        .not().isEmpty().withMessage("El campo edad es requerido para editar el jugador")
        .isNumeric().withMessage("El valor debe ser un numero"),
    check("posicíon")
        .not().isEmpty().withMessage("El campo posicion es requerido para editar el jugador")
        .isString().withMessage("El valor debe ser un string"),
    check("altura")
        .not().isEmpty().withMessage("El campo altura es requerido para editar el jugador")
        .isNumeric().withMessage("El valor debe ser un numero"),
    check("peso")
        .not().isEmpty().withMessage("El campo peso es requerido para editar el jugador")
        .isNumeric().withMessage("El valor debe ser un numero"),    
    check("disponible")
        .not().isEmpty().withMessage("El campo disponible es requerido para editar el jugador")
        .isBoolean().withMessage("El valor debe ser un boolean")
]

module.exports = checkCrear, checkEditar