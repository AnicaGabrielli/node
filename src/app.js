// importando o express 
import express from 'express';

// criando instância
const app = express();

// ,ock

const selecoes = [
    {id: 1, selecao: "Brasil", grupo: 'g'},
    {id: 2, selecao: "Suíca", grupo: 'g'},
    {id: 3, selecao: "Sérvia", grupo: 'g'},
    {id: 4, selecao: "Eua", grupo: 'g'},
    {id: 5, selecao: "Várxa", grupo: 'g'}
]
   


// criar rota padrão ou raiz

// ENDPOINT : parte final da url ex. /selecoes ou /alunos
app.get('/', (req, res)=>{
    res.send('careca é legal');
})

app.get('/selecoes', (req, res)=>{
    res.status(200).send(selecoes);
})
// exportando por padrão
export default app;