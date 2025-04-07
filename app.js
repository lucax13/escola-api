import express from 'express';
import { ler, inserir, lerUM, excluir, atualizar } from './src/aluno.js';
import cors from 'cors';
const app = express();
const porta = process.env.PORT || 3000;

//habilitando para dar suporte ao formato json
app.use(express.json());






//habilitandopara dar surporte a dados inseridos a partir de inputs de formulario
app.use(express.urlencoded({extended:true}) );

app.use(cors());                                                                                                                                                                                                                                                                                                                                                                                                                            

/* CONFIGURANDO ROTAS */

// raiz da API
app.get('/', (req, res) => {
   // res.send(`API utilizando Node.js, Express e MySQL`);
   res.redirect('https://documenter.getpostman.com/view/43612037/2sB2cSi4Cs');
});

// Exibindo TODOS os alunos
app.get('/alunos', (req, res) => {
    // res.send(`Exibindo todos os alunos`);
    ler(res);
});

// Exibindo UM aluno
app.get('/alunos/:id', (req, res) => {
   // res.send(`Exibindo dados de UM aluno`);

   const id = parseInt(req.params.id);

   lerUM(id, res);
});

// INSERINDO/CADASTRANDO/ADICIONANDO um aluno
app.post('/alunos', (req, res) => {
    //res.send(`INSERINDO um aluno`);
    const novoAluno = req.body;
    inserir(novoAluno, res);
});

// // ATUALIZANDO aluno
// app.put('/alunos/:id', (req, res) => {
//     res.send(`Atualizando dados do aluno`);
// });

// ATUALIZANDO aluno
app.patch('/alunos/:id', (req, res) => {
    //res.send(`Atualizando dados do aluno`);

    //captura id
    const id = parseInt(req.params.id);

    //pegando as informações do body
    const aluno = req.body;

    atualizar(id, aluno, res);
});

// EXCLUINDO aluno
app.delete('/alunos/:id', (req, res) => {
    //res.send(`Aluno excluído com sucesso!`);

    //capturando o id
    const id = parseInt(req.params.id);

    excluir(id, res);
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});