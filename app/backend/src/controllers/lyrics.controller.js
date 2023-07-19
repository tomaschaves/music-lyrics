const lyricsService = require('../services/lyrics.service');

const error500Message = 'Algo deu errado';

const getAllLyricsTitles = async (_req, res) => {
  try {
    const lyrics = await lyricsService.getAllLyrics();
    return res.status(200).json(lyrics);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const lyric = await lyricsService.getById(id);

    if (!lyric) return res.status(404).json({ message: 'Letra não encontrada' });

    return res.status(200).json(lyric);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getByTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const lyric = await lyricsService.getByTitle(title);

    if (!lyric) return res.status(404).json({ message: 'Letra não encontrada' });

    return res.status(200).json(lyric);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const createLyric = async (req, res) => {
  try {
    const { title, lyric, annotations } = req.body;
    const newLyric = await lyricsService.createLyric(title, lyric, annotations);

    return res.status(201).json(newLyric);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateLyric = async (req, res) => {
  try {
    const { title, lyric, annotations } = req.body;
    const { id } = req.params;
    const updatedLyric = await lyricsService.updateLyric(id, title, lyric, annotations);

    if (!updatedLyric) return res.status(404).json({ message: 'Letra não encontrada' });

    return res.status(200).json({ message: 'Letra atualizada com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteLyric = async (req, res) => {
  try {
    const { id } = req.params;
    await lyricsService.deleteLyric(id);

    return res.status(200).json({ message: 'Letra excluída com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAllLyricsTitles,
  getById,
  getByTitle,
  createLyric,
  updateLyric,
  deleteLyric,
};
