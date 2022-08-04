const express = require("express");
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index', {
    nome: 'helberte',
    sobrenome: 'Costa'
  });
});

app.get('/autor', function(req, res){
  res.render('autor');
});






// SERVIDOR
app.listen(3000, function(erro){
  if(erro){
    console.log("Deu erro");
  }else{
    console.log("Servidor iniciado");
  }
});


/*
get - para retornar alguma coisa
post - quando tem formulário para enviar informações pro servidor
put - atualizar um cadastro
delete - para deletar alguma informação
patch - atualizar somente uma informação especifica
options - algo muito específico
*/