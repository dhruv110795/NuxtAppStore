const middleware = {}

middleware['load-users'] = require('..\\middleware\\load-users.js')
middleware['load-users'] = middleware['load-users'].default || middleware['load-users']

middleware['test-auth'] = require('..\\middleware\\test-auth.js')
middleware['test-auth'] = middleware['test-auth'].default || middleware['test-auth']

export default middleware
