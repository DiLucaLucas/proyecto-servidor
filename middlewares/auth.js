const jwt = require("jsonwebtoken");

const authMiddleware =
  (rolesPermitidos = []) =>
  (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Token no previsto" });

      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token inválido" });

        if (!rolesPermitidos.includes(user.rol)) {
          return res.status(403).json({ message: "Acceso denegado" });
        }

        req.user = user;
        next();
      });
    }
  };
module.exports = authMiddleware;
