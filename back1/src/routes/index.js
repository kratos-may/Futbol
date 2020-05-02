const express = require("express");
const router = express.Router();
const TeamController = require('../controllers/TeamController');
const CompetitionsController = require('../controllers/CompetitionsController');
module.exports = function(){
    
    //me trae todas las competencias de la api
    router.get('/competitions',CompetitionsController.ObtenerLigas);
    //me trae una liga de la api
    router.get('/competitions/:id',CompetitionsController.obtenerUnaLiga);
    //mostrar todos los equipos de una liga
    router.get('/competitions/2014/teams',TeamController.obtenerTodosEquipos);
    //mostrar un equipo de la liga ,este tiene dentro delparamtro scuad todos los jugadores
    router.get('/teams/:id',TeamController.obtenerEquipo);
    //mostrar ultimos 4 partidos que jugo el equipo
    router.get('/teams/:id/matches',TeamController.obtenerUltimosPartidos);
    //info de un jugador de determinado equipo
    router.get('/players/:id',TeamController.obtenerDatosJugador);
    return router;
} 