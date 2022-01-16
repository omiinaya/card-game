'use strict';

module.exports = (sequelize, DataTypes) => {
    const cards = sequelize.define(
        'cards',
        {
            cardName: DataTypes.STRING,
            slug: DataTypes.STRING,
            cardRarity: DataTypes.INTEGER,
            cardImage: DataTypes.STRING,
            cardDesc: DataTypes.TEXT,
            cardType: DataTypes.STRING,
            cardATK: DataTypes.INTEGER,
            cardDEF: DataTypes.INTEGER
        }
    );
    /*
    users.associate = function(models) {
      // associations can be defined here
      users.hasMany(models.posts, { as: 'posts' });
      users.hasMany(models.jobs, { as: 'jobs' });
    };
     */
    return cards;
};
