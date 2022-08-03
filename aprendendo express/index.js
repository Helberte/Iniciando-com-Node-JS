const express = require('express'); // importando o express
const app = express(); // inicializando o express dento da variavel app



// criando uma rota, forma mais simples
// a barra significa o diretorio raiz do app
app.get("/",function(req, res){

// como devolver uma resposta ?

  res.send('<h1>Bem vindo helberteeeeeee</h1>');

// send significa enviar
// quando uma resposta é enviada, todo o resto do código
// não vai mais funcionar pois a conexão com o cliente é
// fechada
});

app.get('/blog', function(req, res){
  res.send('Bem vindo ao meu blog, testando o nodemon');
});


app.get('/portfolio/helberte', (req, res) => {
  res.send('Vem vindo ao meu portfolio');
});



// o segundo parametro define o que a rota faz e recebe dois
// parametros chamados, res = resposta e req = requisição

















// iniciar o servidor
app.listen(3000, function(erro){
  if(erro){
    console.log("ocorreu um erro");
  }else{
    console.log("Servidor iniciado");
  }
});

// listem recebe uma função que é rodada sempre que o servidor
// é iniciado

// o servidor normalmente é a ultima coisa a ser chamada