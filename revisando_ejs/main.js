const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// estou dizendo ao express que desejo usar arquivos estaticos
// são aqueles que não são processados no back-end
// CSS, IMAGENS, JAVASCRIPT DO FRONT-END, ARQUIVOS DE DADOS ETC
app.use(express.static('public'));

app.get('/home', (req, res) =>{
  res.render('newSite');
})


app.get('/:nome/:idade', (req, res) => {
 
  var solteiro = 'SIM';
  var nome = req.params.nome;
  var idade = req.params.idade;
  var exibirMSG = false;

  var produtos = [
    {nome: 'Doritos', preco: 3.14},
    {nome: 'Cocacola', preco: 5},
    {nome: 'leite', preco: 5}
  ];

  res.render('index', {
    nome: nome,
    idade: idade,
    estadoCivil: solteiro,
    msg: exibirMSG,
    produtos: produtos
  });
});

//levantando servidor
app.listen(3000, _ => {
  console.log('Servidor levantado');
});