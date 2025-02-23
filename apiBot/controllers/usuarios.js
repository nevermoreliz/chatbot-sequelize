const { adapterDB } = require('../../provider/database');
const { handleHttpError } = require('../utils/handleError');

const getUsuario = async (req, res) => {
    try {

        res.json({
            ok: true,
            data: 'Usuario'
        });

    } catch (error) {
        handleHttpError(res, 'ERROR_GET_USUARIO_DETALLE')
    }
};

const getUsuarios = async (req, res) => {
    try {

       

    } catch (error) {
        handleHttpError(res, 'ERROR_GET_USUARIOS')
    }
};

const createUsuario = async (req, res) => {
    try {


        console.log(req.body);
        

        res.json({
            ok: true,
            data: 'Crear Usuario'
        });

    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_USUARIO')
    }
};
const updateUsuario = async (req, res) => {
    try {

    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATE_USUARIO')
    }
};
const deleteUsuario = async (req, res) => {
    try {

    } catch (error) {
        handleHttpError(res, 'ERROR_DELETE_USUARIO')
    }
};

module.exports = { getUsuario, getUsuarios, createUsuario, updateUsuario, deleteUsuario }