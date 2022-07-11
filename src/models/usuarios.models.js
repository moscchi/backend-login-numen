const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    id_usuario: { type: Number },
});

const UsuariosModel = mongoose.model('Usuarios', Schema);

module.exports = UsuariosModel