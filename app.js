const express = require('express');
const app = express();
const PORT = 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor de gestión de pagos!');
});

// Rutas de usuarios
app.use('/users', require('./routes/users'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
