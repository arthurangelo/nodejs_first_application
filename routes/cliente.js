const express = require('express');

const router = express.Router();

const cliente = require('../model/cliente');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
    cliente.findAll()
        .then(result => res.json(result))
        .catch(error => res.status(412).json({ msg: error.message }));
});

router.get("/:id", (req, res) => {
    cliente.findOne({
        where: {
            codigo: req.params.id,
        }
    }).then(result => {
        if (result) {
            res.json(result);
        } else {
            res.sendStatus(404);
        }
    }).catch(error => {
        res.status(412).json({ msg: error.message });
    });
});



router.get('/search/params', (req, res) => {
    var query = `%${req.query.nome}%`;
  
    console.log(query)
    cliente.findAll({ where: { nome: { [Op.like]: query } } })
      .then(clientes => res.json(clientes))
      .catch(err => console.log(err));
  });
  

router.post('/', (req,res) => {
    console.log(req.body);
    cliente.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });    
    
router.put('/', (req,res) => {
    cliente.update(req.body, { 
        where: {
        codigo: req.body.codigo
        }
      })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    }); 
    
router.delete("/:id", (req,res) => {
    cliente.destroy({
        where: {
            codigo: req.params.id
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
                res.status(412).json({msg: error.message});
            });
        });   

module.exports = router;
