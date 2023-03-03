
const { validate } = require('express-validation')
const ProflieController = require('./controllers/profile.controller')
const ProtectionMiddleware = require('../common/middlewares/protect.middleware')
const FieldMiddleware = require('../common/middlewares/field.check.middleware');
const CacheMiddlware = require('../common/middlewares/cache.middleware')


exports.routesConfig = (app) => {

  app.get('/profile', [
    validate(FieldMiddleware.profile),
    CacheMiddlware.ApiCache(1),
    ProflieController.GetUserProfile
  ]);

};