'use strict'

/*
 * Require the path module
 */
const path = require('path')

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require('@frctl/fractal').create())

/*
 * Give your project a title.
 */
fractal.set('project.title', 'agnostic-css')

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'src/components'))

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'))

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'))

/* Set the static HTML build destination */
fractal.web.set('builder.dest', __dirname + '/build')

// Even without --sync I get 404: No matching route found for /browser-sync/socket.io/
// This hack seems to fix that:
// https://github.com/frctl/fractal/issues/87#issuecomment-242639873
fractal.web.set('server.syncOptions', {
  ui: {
    port: 9999
  }
})
