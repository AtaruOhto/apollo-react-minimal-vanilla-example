const SQL = require('sequelize');

const getDB = async () => {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in,
  };

  const db = new SQL('', '', '', {
    dialect: 'sqlite',
    storage: './db.sqlite',
    operatorsAliases,
    logging: false,
  });

  const users = db.define('user', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: SQL.STRING,
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
  });

  return { users };
} 
  
module.exports = {
  getDB,
}