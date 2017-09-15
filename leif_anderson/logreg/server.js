/*  server.js for logreg app
    leif anderson 7/15/17
*/

// dependencies
//
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const port = 8000;

app = express();

// middleware
//
app.set('view engine', 'ejs')
app.set('views', __dirname + '/client/static')

app.use(express.static(__dirname + 'client/static'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: 'grumpycatislife',
  resave: false,
  saveUninitialized: true
}))

// mongoose
//
require('./server/config/mongoose')

// routes
//
require('./server/config/routes')(app)

app.listen(port, () => console.log('PORT', port))
