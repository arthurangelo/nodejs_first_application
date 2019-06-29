const express = require('express');

const router = express.Router();

const cliente = require('../model/cliente');

router.get('/', (req, res) => {
    cliente.findAll()
        .then(result => res.json(result))
        .catch(error => res.status(412).json({ msg: error.message }));
});

module.exports = router;
