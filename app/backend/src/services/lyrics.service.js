const { lyrics } = require('../models');

/* Esta função usa o método findAll do Sequelize para buscar todas as linhas da tabela Users
Equivale a fazer a query: SELECT * FROM Users */
const getAllLyrics = async () => {
  const allLyrics = await lyrics.findAll();

  return allLyrics.map((lyric) => [lyric.id, lyric.title]);
};

/* Esta função usa o método findByPk do Sequelize para buscar um usuário pelo id.
Equivale a fazer a query: SELECT * FROM Users WHERE id=? */
const getById = async (id) => {
  const lyric = await lyrics.findByPk(id);
  // outra opção:
  // const lyric = await lyrics.findOne({where: { id }});

  return lyric;
};

/* Esta função usa o método findOne do Sequelize combinado 
com a chave where para buscar por id e email. 
Equivale a fazer a query: SELECT * FROM Users WHERE id=? AND email=? */
const getByTitle = async (title) => {
  const lyric = await lyrics.findOne({ where: { title } });

  return lyric;
};

/* Esta função usa o método create do Sequelize para inserir um objeto na tabela Users
Equivale a fazer a query: INSERT INTO Users (full_name, email) VALUES (?, ?) */
const createLyric = async (title, lyric, annotations) => {
  const newLyric = await lyrics.create({ title, lyric, annotations });
  return newLyric;
};

/* Esta função usa o método update do Sequelize para atualizar um objeto na tabela Users
Equivale a fazer a query: UPDATE Users SET full_name=?, email=? WHERE id=?*/
const updateLyric = async (id, title, lyric, annotations ) => {
  const [updatedLyric] = await lyrics.update(
    { title, lyric, annotations },
    { where: { id } },
  );

  // console.log(updatedLyric); // confira o que é retornado quando o user com o id é ou não encontrado;
  return updatedLyric;
};

/* Esta função usa o método destroy do Sequelize para remover um objeto na tabela Users
Equivale a fazer a query: DELETE FROM Users WHERE id=?*/
const deleteLyric = async (id) => {
  const lyric = await lyrics.destroy(
    { where: { id } },
  );

  // console.log(lyric); // confira o que é retornado quando o user com o id é ou não encontrado;
  return lyric;
};


module.exports = {
  getAllLyrics,
  getById,
  getByTitle,
  createLyric,
  updateLyric,
  deleteLyric,
};