const express = require('express')
const router = express.Router()
const { getUsuario, createUsuario } = require('../controllers/usuarios')

//TODO http://localhost/usuarios :: get,post,delete.put

router.get("/", getUsuario);
router.post("/", createUsuario);

module.exports = router