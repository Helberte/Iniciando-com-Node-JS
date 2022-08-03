const express = require('express'); // importando o express
const app = express(); // inicializando o express dento da variavel app

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