var express = require('express');
var http = require('http')
var app = express();

app.get('/', (req, res) => {
    res.status(200).send("Bem-vindo ao API REST");
});

http.createServer( app ).listen(8001, () => {
    console.log('Servidor em execução em http://localhost:8001/');
});


var pessoas = ["Inácio", "Elisa", "Maya"];

app.get('/pessoas', (req, res) => {
    res.status(200).send( pessoas );
});

app.get('/pessoas/:posicao', (req, res) => {
    var posicao = req.params.posicao
    res.status(200).send( pessoas[posicao] );
});

app.post('/pessoas', (req, res) => {
    nome = "Nome" + pessoas.length;
    pessoas.push( nome );
    res.status(200).send( nome + " adicionado com sucesso!" );
});

app.delete('/pessoas/:posicao', (req, res) => {
    var posicao = req.params.posicao
    var nome = pessoas[posicao];
    pessoas.splice(posicao, 1);
    res.status(200).send( nome + " removido com sucesso!" );
});