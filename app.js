import express from 'express';

const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('API utilizando Node.js, Express e MySQL');
});

app.listen(porta, () => {
    console.log('servidor rodando na porta ${porta}');
});