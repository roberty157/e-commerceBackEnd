// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

//id: integer, doesn't allow null, set as primary key, uses auto increment
//product_name: string, doesn't allow null
//price: decimal, doesn't allow null, validates that the value is a decimal
//stock: integer, doesn't allow null values, set a default value of 10, validates that the value is numeric
//category_id: integer, references the Category model's id



// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      isDecimal: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    }, 
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },

    },
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
