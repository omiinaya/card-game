'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards', [
      {
        cardName: 'Test #1',
        cardRarity: 5,
        cardImage: '',
        cardDesc: 'Test #1 description',
        cardType: 'Type test',
        cardATK: 5,
        cardDEF: 5
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', null, {});
  },
};