const LyricsModel = (sequelize, DataTypes) => {
  const Lyrics = sequelize.define('lyrics', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    lyric: DataTypes.STRING,
    annotations: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return Lyrics;
};

module.exports = LyricsModel;