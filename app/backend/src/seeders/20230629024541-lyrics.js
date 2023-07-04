// src/seeders/[timestamp]-users.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('lyrics',
    [
      {
        title: 'Test song',
        lyric: 'テスト',
        annotations: 'teste',
      },
      {
        title: 'Test song 2',
        lyric: 'テスト 二',
        annotations: 'teste dois',
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('lyrics', null, {}),
};