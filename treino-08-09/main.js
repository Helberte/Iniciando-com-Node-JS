const express = require('express');  // importando o express
const app = express();  // inicializando o express
const nunjucks = require('nunjucks');

nunjucks.configure('views', {
  //                  Mostra onde está os arquivos que vão ser renderizados
  express: app,
  // recebe a variável que contém o servidor express

  autoescape: true
  // é como se fosse pra substituir os nomes de variáveis no html automaticamente
});

app.set("view engine", "html");
// define qual será o motor de visualização, quais arquivos serão renderizados pelo motor de visualização, view engine


app.get('/', (req, res) => {
  res.render('index', {
    nome: 'Helberte está testando.'
  });
});

app.get('/teste', (req, res) => {
  res.send('Nova rota');
})

app.listen(4000, function(erro) {
  if(erro){
    console.log('deu erro');
  }
  else{
    console.log('sevidor levantado');
  }
});