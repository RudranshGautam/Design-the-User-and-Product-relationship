const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User = require('./user');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: Sequelize.DOUBLE,
  description: Sequelize.STRING
});

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

module.exports = Product;
