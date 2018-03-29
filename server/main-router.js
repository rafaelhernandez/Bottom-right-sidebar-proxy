const express = require('express');
const path = require('path');
const axios = require('axios');
const Html = require('./Html.js');
const env = require('./environment.js');
const router = express.Router();

router
  .route('/ssr/:id')
  .get((req, res, next) => {
    axios
      .get(`http://${env.sidebarHost}:${env.sidebarPort}/api/sidebar/ssr/${req.params.id}`)
      .then(html => {
        res.send(Html.render(html.data));
      })
      .catch(err => {
        console.log('Error retrieving the room data SSR rendered', err);
      });
  })
  .options((req, res) => {
    res.sendStatus(200);
  });

router
  .route('/:id')
  .get((req, res, next) => {
    res.sendFile('index.html', { root: path.resolve('public') });
  })
  .options((req, res) => {
    res.sendStatus(200);
  });

module.exports = router;
