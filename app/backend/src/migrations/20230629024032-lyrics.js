'use strict';

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */

  module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable(
        'lyrics',
        {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          title: {
            allowNull: false,
            type: Sequelize.STRING(255),
          },
          lyric: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
          annotations: {
            allowNull: false,
            type: Sequelize.TEXT,
          },
        },
      );
    },
    down: async (queryInterface, _Sequelize) => {
      await queryInterface.dropTable('lyrics');
    },
  };