const express = require('express');
const basicAuth = require('express-basic-auth');

/*
 *
 */

const app = express();

app.use('/', basicAuth({
  challenge: true,
  realm: 'vercel-basic-auth.node-express',
  users: { 'admin': 'admin' },
  unauthorizedResponse: 'Restricted area, please login (admin:admin).'
}));

app.use(express.static(__dirname + '/storybook-static'));

module.exports = app;