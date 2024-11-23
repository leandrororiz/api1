const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear Json
app.use(express.json());

//Array para armazenar os usuarios
let usuarios = [];


//Rota GET para usuarios
app.get('/usuarios', (req,res) =>{
    res.json(usuarios);
})



app.post('/usuarios', (req,res) => {
    const {nome, email} = req.body;
    if( !nome || !email ) {
        return res.status(400).json({erro: 'Nome e email são obrigatorios'})
    }

    
    const novoUsuario = {id: usuarios.length + 1, nome, email};
    usuarios.push(novoUsuario)
    res.status(201).json(novoUsuario);
});


app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:3000/usuarios${port}`);
});