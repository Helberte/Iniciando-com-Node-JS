const express = require('express');

const app = express();

// configurando EJS

app.set('view engine','ejs');

// estou dizendo pro express que o motor de html (view engine)
// que quero utilizar é o ejs

app.get('/', (req, res) => {

  // chamar a página html

  var nome = "Helberte Costa";
  var lang = "JavaScript";

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: 'hWeb'
  });
});


app.listen(8081, erro => {
  if(erro){
    console.log('Deu erro');
  }else{
    console.log('Servidor iniciado');
  }
});