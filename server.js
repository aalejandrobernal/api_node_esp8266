// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json());

// Importar y usar las rutas
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const dataRoutes = require('./routes/data');
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/data', dataRoutes);

// Sincronizar con la base de datos
sequelize.sync({force:true})
.then(() => {
  console.log('Database connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch(error => console.error('Error synchronizing database:', error));