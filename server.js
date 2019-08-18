const express = require('express');
const projectRouter = require('./routes/projects-route');
const actionsRouter = require('./routes/actions-route');

const server = express();

server.use(express.json());
server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectRouter);

module.exports = server;
