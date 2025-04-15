import app from "./src/app.js";

// importando a conexão

import conexao from "./infra/conexao.js";

// definindo a porta
const PORT = 4000;

// fazer a conexão

conexao.connect((erro)=>{
    if(erro){
        console.log(`conexão falhou por iddo => ${erro}`)
    }else{
        console.log(`Conexão realizada com sucesso`);

// escutar a porta
    app.listen(PORT, ()=>{
        console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
    })
    }
})

