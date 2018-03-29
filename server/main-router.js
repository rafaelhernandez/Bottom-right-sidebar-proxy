const express = require('express');
const path = require('path');
const axios = require('axios');
const Html = require('./Html.js');
const env = require('./environment.js');
const redis = require('./redis.js');

const router = express.Router();

router
  .route('/ssr/:id')
  .get((req, res, next) => {
    let id = parseInt(req.params.id);
    let needToCache = false;
    let key = 'Proxy_' + id;
    if (id > 0) {
      redis.get(key)
        .then(data => {
          if (data) {
            return data;
          } else {
            needToCache = true;
            return axios
              .get(`http://${env.sidebarHost}:${env.sidebarPort}/api/sidebar/ssr/${id}`);
          }
        })
        .then(html => {
          let body = html;
          if (needToCache) { 
            body = Html.render(html.data);
            Promise.resolve(redis.set(key, body));
          }
          res.send(body);
        })
        .catch(err => {
          console.log('Error ', err);
        });
    } else {
      res.sendStatus(404);
    }
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
