'use strict';
var bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      hooks: {
        beforeCreate: async function(user, options) {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
    },
  );
  return users;
};
