const { request, response } = require('express');

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

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        edad
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