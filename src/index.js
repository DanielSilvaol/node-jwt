const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar dados JSON
app.use(bodyParser.json());

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Bem-vindo à sua API Express!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
