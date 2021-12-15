const {check} = require('express-validator');

module.exports = [

check('name')
.notEmpty()
.withMessage('Nombre requerido'),

check('color')
.notEmpty()
.withMessage('Color requerido'),

check('email')
.notEmpty()
.withMessage('Email requerido'),

check('age')
.notEmpty()
.withMessage('Indicar la edad')
.isInt().withMessage('La edad debe ser un número ')

]