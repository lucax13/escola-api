import express from 'express';

const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('API utilizando Node.js, Express e MySQL');
});

//Exibindo toso os alunos
app.get('/alunos', (req, res) => {
    res.send('Exibindo todos os alunos');
});

//exibndo um aluno
app.get('/alunos/1', (req, res) => {
    res.send('exibindo um aluno ');
});

//inserindo aluno
app.post('/alunos', (req, res) => {
    res.send('exibindo dados do aluno');
});

//atualizando aluno
app.patch('alunos/1', (req, res) => {
    res.send('atualizar dados aluno');
});

//excluir aluno
app.delete ('alunos/1', (req, res) => {
    res.send('aluno excluindo com sucesso!');
});

app.listen(porta, (req, res) => {
    console.log('servidor rodando na porta ${porta}');
});