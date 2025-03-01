const { adapterDB } = require('../../provider/database');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
const Persona = require('../models/personas');
const { handleResponseJsonMsg } = require('../utils/handleResponseJson');

const getPersona = async (req, res) => {

    try {

        console.log(req.usuario);

        handleResponseJsonMsg(res, 200, 'aqui')

    } catch (error) {
        // console.log(error);
        handleHttpError(res, 'ERROR_GET_PERSONA')
    }

};

const getPersonas = async (req, res) => {
    try {

        /* -------------------------------------------------------------------------- */
        /*                              ejemplo de query                              */
        /* -------------------------------------------------------------------------- */

        // const query = 'select * from personas'
        // const result = await adapterDB.db.query(query);
        // const row = result.rows[0];

        /* -------------------------------------------------------------------------- */


        /* ------------------- sacar el usuario del token o sesion ------------------ */
        const userToken = req.usuario

        const personas = await Persona.findAll()

        res.status(200).json({
            ok: true,
            data: personas,
            sesionUser: userToken
        })

    } catch (error) {
        // console.log(error);
        handleHttpError(res, 'ERROR_GET_PERSONA')
    }
};

const createPersona = async (req, res) => {

    try {

        const body = matchedData(req);

        const dataInsert = {
            ...body,
            created_at: new Date(), // Fecha y hora actual
            updated_at: new Date(), // Fecha y hora actual
        };

        const datoPersona = await Persona.create(dataInsert);

        res.status(200).json({
            ok: true,
            msg: 'Persona Registrada'
        })

    } catch (error) {

        // console.log(error);
        handleHttpError(res, 'ERROR_CREATE_PERSONA')

    }


};
const updatePersona = async (req, res) => {
    try {


    } catch (error) {
        // console.log(error);
        handleHttpError(res, 'ERROR_UPDATE_PERSONA')
    }
};
const deletePersona = async (req, res) => {
    try {


    } catch (error) {
        // console.log(error);
        handleHttpError(res, 'ERROR_DELETE_PERSONA')
    }
};

module.exports = { getPersona, getPersonas, createPersona, updatePersona, deletePersona }