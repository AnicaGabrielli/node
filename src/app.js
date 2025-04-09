// importando o express 
import express from 'express';

// criando instância
const app = express();

// indica queo express tem que fazer a leitura de json caso o corpo da requisição(body) tenha um json.

app.use(express.json())

// mock

const selecoes = [
    {id: 1, selecao: "Brasil", grupo: 'g'},
    {id: 2, selecao: "Suíca", grupo: 'g'},
    {id: 3, selecao: "Sérvia", grupo: 'g'},
    {id: 4, selecao: "Eua", grupo: 'g'},
    {id: 5, selecao: "Várxa", grupo: 'g'}
]
   
// retornar o objeto por id 

const buscarSelecaoPorId = (id)=>{
     return selecoes.filter(selecao => selecao.id == id)
}

// pegar a posição do elemento do array por id 

const buscarIndexSelecao = (id)=> {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// criar rota padrão ou raiz

// ENDPOINT : parte final da url ex. /selecoes ou /alunos
app.get('/', (req, res)=>{
    res.send('careca é legal');
})

// exibe selecoes 

app.get('/selecoes', (req, res)=>{
    res.status(200).send(selecoes);
})

// crindo um parametro na rota

app.get('/selecoes/:id', (req, res)=>{
    // pegando os parâmetros da requisição
    //let index = req.params.id;
    res.json(buscarSelecaoPorId(req.params.id))
})

// adcionar elementos - post

app.post('/selecoes', (req, res)=>{
    // pegar o corpo da requisição
    selecoes.push(req.body);
    // enviando resposta de sucesso
    res.status(201).send('Seleção cadastrada com sucesso');
})

// rota para deletar

app.delete('/selecoes/:id', (req, res)=>{
    let index = buscarIndexSelecao(req.params.id);
    selecoes.splice(index, 1);
    res.send(`selecao com id ${req.params.id} excluída com sucesso`)
})


// exportando por padrão
export default app;

