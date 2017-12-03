var express = require('express')

var app = express()

var cors = require('cors')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

var db = require('./db')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride())

app.use('/', require('./routes-socialmovie.js'))

db.connect('mongodb://localhost:27017/socialmovie', function(err) {
	if (err) throw err
	console.log('Conexion realizada')

	app.listen(3000, function() {
		console.log('Esperando conexiones en puerto 3000.....')
	})
})