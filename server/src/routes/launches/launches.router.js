const express = require('express');

const {
    httpGetAllLaunches,
    httpPostAddNewLaunche,
    httpAbortLaunch,
} = require('./launches.controller');
const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpPostAddNewLaunche);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;