const express = require('express');
const router = express.Router();
const env = require('./environment.js');

const proxy = require('express-http-proxy');
const navbarProxy = proxy(`http://${env.navbarHost}:${env.navbarPort}/api`);
const highlightsProxy = proxy(`http://${env.highlightsHost}:${env.highlightsPort}/api`);
const sidebarProxy = proxy(`http://${env.sidebarHost}:${env.sidebarPort}/api`);
const reviewsProxy = proxy(`http://${env.reviewsHost}:${env.reviewsPort}/api`);
const mapProxy = proxy(`http://${env.mapHost}:${env.mapPort}/api`);

router.route('/title-bar/restaurant/:id')
  .get((req, res, next) => navbarProxy(req, res, next));

router.route('/highlights/reviews/:id')
  .get((req, res, next) => highlightsProxy(req, res, next));

router.route('/highlights/photos/:id')
  .get((req, res, next) => highlightsProxy(req, res, next));

router.route('/sidebar/business/:id')
  .get((req, res, next) => sidebarProxy(req, res, next));

router.route('/sidebar/postalCode/:code')
  .get((req, res, next) => sidebarProxy(req, res, next));

router.route('/sidebar/businessTips/:id')
  .get((req, res, next) => sidebarProxy(req, res, next));

router.route('/sidebar/photos/:id')
  .get((req, res, next) => sidebarProxy(req, res, next));

router.route('/reviews/reviews/:id')
  .get((req, res, next) => reviewsProxy(req, res, next));

router.route('reviews/user/:id')
  .get((req, res, next) => reviewsProxy(req, res, next));

router.route('/map-and-images/business/:id')
  .get((req, res, next) => mapProxy(req, res, next));

router.route('/map-and-images/business/:id/photos')
  .get((req, res, next) => mapProxy(req, res, next));

module.exports = router;
