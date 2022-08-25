const express = require('express');
const router = express.Router();

router.get('/contato', function (req, res) {

  res.render('contato');
})

router.post('/contato', function (req, res) {
  let envio = false;

  if (req.body.nome != '') {
    envio = true;
  }

  res.render('contato', {
    nome: req.body.nome,
    envio
  });
})


module.exports = router;