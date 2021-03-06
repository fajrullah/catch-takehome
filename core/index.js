'use strict'
/**
 * Define from modules
 */

const { clientError400, clientErrorHandler, logErrors } = require('./error')
const { isEntityFalse } = require('./protected')

/**
 * Loader for Model
 * Define All Model Here
 */

module.exports = {
  config: require('./config'),
  publicRoute: require('./route/publicRoute'),
  response: require('./helper/response'),
  isEntityFalse,
  clientError400,
  clientErrorHandler,
  logErrors
}
