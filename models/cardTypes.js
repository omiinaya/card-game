'use strict';

module.exports = (sequelize, DataTypes) => {
    const cardTypes = sequelize.define(
        'cardTypes',
        {
            typeName: DataTypes.STRING,
            slug: DataTypes.STRING,
        }
    );
    return cardTypes;
};
