// models/index.js
const { Sequelize } = require('sequelize');
const config = require('../config/config.js');
const env = process.env.NODE_ENV || 'development'
const sequelize = new Sequelize(config[env]);


const db = {};


// Importar los modelos aquí
db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Data = require('./data')(sequelize, Sequelize.DataTypes);

// Asociaciones
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
module.exports = db;
