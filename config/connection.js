require('dotenv').config();

const Sequelize = require('sequelize');

//const sequelize = process.env.JAWSDB_URL
// ? new Sequelize(process.env.JAWSDB_URL)
//  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//     host: 'localhost',
//     dialect: 'mysql',
//     password: '1702Vi1702Vi!',
//     dialectOptions: {
//      decimalNumbers: true,
//    },
//  });

const sequelize = new Sequelize('ecommerce_db', 'root', '1702Vi1702Vi!', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});
console.log('Connected to Database')
module.exports = sequelize;

