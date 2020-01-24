// main.js
const { Probot } = require('probot')
const app = require('./index.js')
// require('dotenv').config({ path: 'run/.env' })

// pass a probot app as a function
Probot.run(app)
