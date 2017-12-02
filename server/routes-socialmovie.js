var express = require('express')
var router = express.Router()

var dbPersonas = require('./socialmovie-db')

router.get('/', function(req,res) {
	console.log('GET /')
	var coleccion = 'all_peliculas_TMDB'
	dbPersonas.findAll(coleccion, function(err,docs) {
		if (err) res.send(500, err.message)

		console.log('docs extraidos')
		res.status(200).jsonp(docs)
	})
})

router.get('/:id', function(req,res) {
	console.log('GET /personas/'+req.params.id)

	dbPersonas.findOne(req.params.id, function(err,docs) {
		if (err) res.send(500, err.message)

		console.log(docs)
		res.status(200).jsonp(docs)
	})
})

router.post('/', function(req,res) {
	console.log('POST /personas')
	console.log(req.body)

	dbPersonas.insert(req.body, function(err,docs) {
		if (err) return res.send(500,err.message)

		console.log(docs)
		res.status(200).jsonp(docs);
	})
})

router.put('/:id', function(req,res) {
	console.log('PUT /personas/'+req.params.id)
	console.log(req.body)

	dbPersonas.update(req.params.id, req.body, function(err,docs) {
		if (err) return res.send(500,err.message)

		console.log(docs)
		res.status(200).jsonp(docs);
	})
})

router.delete('/:id', function(req,res) {
	console.log('DELETE /personas/'+req.params.id)
	console.log(req.body)

	dbPersonas.remove(req.params.id, function(err,docs) {
		if (err) return res.send(500,err.message)

		console.log(docs)
		res.status(200).jsonp(docs);
	})
})




module.exports = router