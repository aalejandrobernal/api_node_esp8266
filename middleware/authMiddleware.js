// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Obtén el token del encabezado Authorization

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    req.userId = decoded.id; // Guarda la información del usuario en la solicitud
    next(); // Pasa al siguiente middleware o controlador
  });
};

module.exports = { verifyToken };
