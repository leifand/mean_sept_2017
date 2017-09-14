/*  server.js for xpress/maggots project
    leif anderson 7/13/17
*/

// dependencies
//
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const port = 8000;

// use express
//
app = express();

// ihartbodyparser
//
app.use(bodyParser.urlencoded({ extended: true }))

// set up views and templating engine
//
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// connect to mongoose
//
const connection = mongoose.connect("mongodb://localhost/maggot_db")

// maggot schema!!!
//
const MaggotSchema = new mongoose.Schema({
  maggot_name: String,
  fly_name: String,
  plumpness: Number
})

// mongoose is sooooooo kewl
//
const Maggot = mongoose.model('Maggot', MaggotSchema)

// routes
//
app.get('/', (req, res) => {
  Maggot.find((err, result) => {
    if (err) { console.log(err) }
    res.render('index', { maggots: result })
  })
})

app.post('/', (req, res) => {
  Maggot.create(req.body, (err, result) => {
    if (err) { console.log(err) }
    res.redirect('/')
  })
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.get('/:id', (req, res) => {
  Maggot.find({_id: req.params.id }, (err, response) => {
    if (err) { console.log(err) }
    res.render('show', { maggot: response[0] })
  })
})

app.get('/:id/edit/', (req, res) => {
  Maggot.find({_id: req.params.id }, (err, response) => {
    if (err) { console.log(err) }
    res.render('edit', { maggot: response[0] })
  })
})

app.post('/:id', (req, res) => {
  Maggot.update({_id: req.params.id }, (err, response) => {
    if (err) { console.log(err) }
    res.render('/', { maggot: response[0] })
  })
})

app.post('/:id/delete/', (req, res) => {
  Maggot.remove({_id: req.params.id }, (err, response) => {
    if (err) { console.log(err) }
    res.render('/', { maggot: response[0] })
  })
})

app.listen(port, () => { console.log('PORT', port)})
