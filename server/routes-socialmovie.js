var express = require('express')
var router = express.Router()

var dbPersonas = require('./socialmovie-db')

router.get('/pelicula/:id', function(req, res) {
    console.log('GET /pelicula')
    var coleccion = 'all_peliculas_TMDB'
    var id = req.params.id
    console.log(id)
    dbPersonas.findOne(coleccion, id, function(err, docs) {
        if (err) res.send(500, err.message)

        console.log('docs extraidos peliculas')
        res.status(200).jsonp(docs)
    })
})

router.get('/serie/:id', function(req, res) {
    console.log('GET /serie')
    var coleccion = 'all_series_TMDB'
    var id = req.params.id
    console.log(id)
    dbPersonas.findOne(coleccion, id, function(err, docs) {
        if (err) res.send(500, err.message)

        console.log('docs extraidos series')
        res.status(200).jsonp(docs)
    })
})

router.get('/pag-peli/:id', function(req, res) {
    console.log('GET /paginacion pelis')
    var coleccion = 'all_peliculas_TMDB'
    var id = parseInt(req.params.id)
    console.log('esto es el id: ' + id)
    dbPersonas.findAll(coleccion, id, function(err, docs) {
        if (err) res.send(500, err.message)

        console.log('docs extraidos inicio')
        res.status(200).jsonp(docs)
    })
})

router.get('/pag-seri/:id', function(req, res) {
    console.log('GET /paginacion series')
    var coleccion = 'all_series_TMDB'
    var id = parseInt(req.params.id)
    console.log('esto es el id: ' + id)
    dbPersonas.findAll(coleccion, id, function(err, docs) {
        if (err) res.send(500, err.message)

        console.log('docs extraidos inicio')
        res.status(200).jsonp(docs)
    })
})

router.get('/popular-series', function(req, res) {
    console.log('GET /popular-series')
    var coleccion = 'all_series_TMDB'
    var id = 0
    dbPersonas.findAll(coleccion, id, function(err, docs) {
        if (err) res.send(500, err.message)

        console.log('docs extraidos')
        res.status(200).jsonp(docs)
    })
})

router.get('/popular-people/:pagina', function(req, res) {
    console.log('GET /personas')
    var coleccion = 'Personas2'
	var id = parseInt(req.params.pagina)
    dbPersonas.findAll(coleccion, id, function(err, docs) {
        if (err) res.send(500, err.message)

        console.log('docs extraidos')
        res.status(200).jsonp(docs)
    })
})

router.get('/popular-people', function(req, res) {
    console.log('GET /personas')
    var coleccion = 'Personas2'
    var id = 0
    dbPersonas.findAll(coleccion, id, function(err, docs) {
        if (err) res.send(500, err.message)

        console.log('docs extraidos')
        res.status(200).jsonp(docs)
    })
})

router.get('/', function(req, res) {
    console.log('GET / inicio')
    var coleccion = 'all_peliculas_TMDB'
    //el parametro despues de coleccion se envia sin nada para evitar errores en el modulo socialmovie db
    dbPersonas.findAll(coleccion, 0, function(err, docs) {
        if (err) res.send(500, err.message)

        console.log('docs extraidos inicio')
        res.status(200).jsonp(docs)
    })
})

/*
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
*/



module.exports = router