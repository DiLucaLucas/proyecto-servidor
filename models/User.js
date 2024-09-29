const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const { ROWLOCK } = require('sequelize/lib/table-hints');

const User = sequelize.define('User', {
    nombre: { type: DataTypes.STRING, allowNull: false},
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.ENUM('superadmin', 'admin', 'user'), allowNull: false }
}, {
    timestamps: false
});

module.exports = User;