'use strict'

/**
 * Public Route
 * No Authentication
 * @author Fajrul
 */

module.exports = (app) => {
  app.get('/', (req, res, next) => res.json({
    status: 'V1.0.0'
  }))
}
