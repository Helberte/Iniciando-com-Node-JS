const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {

  let user = {
      nome: 'Helberte Costa', 
      email: 'helberteads@gmail.com'
  };

  response.render('index', {
      usuario: user
  })
});

router.get('/sobre', function (req, res) {
  res.render('sobre');
})

module.exports = router;