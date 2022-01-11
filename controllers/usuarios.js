const { request, response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    //const query = req.query;
    const { q, nombre, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        //query
        q,
        nombre,
        page,
        limit
    });
}

const usuariosPost = async(req, res) => {
    //const { nombre, edad } = req.body;
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);


    //guarda en DB
    await usuario.save();

    res.status(201).json({
        //msg: 'post API - controlador',
        //nombre,
        //edad,
        usuario
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.status(200).json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete
}