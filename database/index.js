const { Sequelize } = require('sequelize');

// Conexión a SQLite (puedes cambiarla según la base de datos que uses)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite' // Archivo SQLite en local
});

sequelize.sync({ alter: true }) // Sincroniza el modelo con la base de datos
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((err) => {
    console.error('Error al sincronizar la base de datos:', err);
  });

module.exports = sequelize;
