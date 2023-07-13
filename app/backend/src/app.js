// src/app.js

const express = require('express');
const lyrics = require('./controllers/lyrics.controller');

const app = express();

// código para as requisições vindas do front-end funcionarem
const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};
app.use(accessControl);
app.use(express.json());

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo "http://localhost:3001/user/search/1?email=leo@test.com"
app.get('/lyric/search/', lyrics.getByTitle);

app.get('/lyric', lyrics.getAllLyricsTitles);

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/lyric/:id', lyrics.getById);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/lyric', lyrics.createLyric);

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/lyric/:id', lyrics.updateLyric);

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/lyric/:id', lyrics.deleteLyric);

module.exports = app;