import app from "./src/app.js";

// definindo a porta
const PORT = 4000;

// escutar a porta
app.listen(PORT, ()=>{
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})