const express = require('express');
const router= express.Router();
const usuarios = require('../models/usuarios');
router.get('/usuarios', (req, res) => {
    res.json(usuarios);

});
module.exports=router;

