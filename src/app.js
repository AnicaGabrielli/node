// importando o express 
const express = require('express');
// criando instância
const app = express();
// definindo a porta
const port = 4000;

// criar rota padrão ou raiz

app.get('/', (req, res)=>{
    res.send('careca é legal'+"piroca games");
})

// escutar a porta

app.listen(port, ()=>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})