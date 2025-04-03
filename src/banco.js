import mysql from 'mysql2';     // importando o módulo


// conexão local
//const conexao = mysql.createConnection({
   // host: 'localhost',
   // user: 'root',
   // password: '',
   // database: 'escola-api'
//});


//conexao remota
const conexao = mysql.createConnection({
    host: 'db4free.net',
    user: 'lucaslima2',
    password: '151106Lu',
    database: 'api_curso_2'
});

// Conectando e passando mensagem (de erro ou sucesso)
conexao.connect( erro => {
    if(erro){
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}.`) 
        //apresenta o host no qual estamos conectado
    }
});

// exportando o recurso
export default conexao;