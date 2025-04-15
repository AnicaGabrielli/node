import mysql from "mysql2";

// criando conexão com o banco de dados
const conexao = mysql.createConnection({
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: '123456',
    database: 'bdcopa'
})

export default conexao;