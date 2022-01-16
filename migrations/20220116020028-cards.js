'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardName: {
        type: Sequelize.STRING
      },
      cardRarity: {
        type: Sequelize.INTEGER
      },
      cardImage: { 
        type: Sequelize.STRING 
      },
      cardDesc: { 
        type: Sequelize.TEXT
      },
      cardType: {
        type: Sequelize.STRING
      },
      cardATK: { 
        type: Sequelize.INTEGER
      },
      cardDEF: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cards');
  }
};