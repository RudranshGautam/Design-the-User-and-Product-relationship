const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking_app', 'root', 'rudransh@1', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
