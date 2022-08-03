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


// PASSAGEM DE PARÂMETROS

app.get('/ola/:nome/:empresa', function(req, res){

  let nome = req.params.nome;
  let empresa = req.params.empresa;


  res.send("<h1>Oi " + nome + " empresa: " + empresa  + "</h1>");
});

// quando coloca /:nome_qualquer está criando um parametro na
// rota, e para trabalhar com rotas é necessário defi-las antes
// serem usadas

// eu posso ter quantos parametros forem necessários,
// só poderei chamar aquela rota determinada, se eu passar
// o parâmetro que foi solicitado

// o objeto req que é passado automaticamente, serve para pegarmos
// qualquer parametro que o usuário passe
// req são os dados enviados pelo usuário
// res é a resposta que vai ser enviada para o usuário


// PARAMETRO NÃO OBRIGATORIO

app.get('/paramNoObrigation/:artigo?',function(req, res){

  let artigo = req.params.artigo;

  if(artigo){
    res.send('Artigo '+req.params.artigo);
  }else{
    res.send('Parametro não obrigatorio ');
  }  
})

// colocando a ? no parametro, ele fica sendo opcional






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