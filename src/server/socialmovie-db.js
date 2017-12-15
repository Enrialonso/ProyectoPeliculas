var db = require('./db')

exports.findAll = function(param, id, callback) {
    var collection = db.collection(param)
    console.log(param)
    console.log('esto es id: ' + id)
    if (param == 'Personas2') {var cantidad = 18} else {var cantidad = 18 }
    id = parseInt(id)
    if (id != 0){id = id * 18}

    collection.find().skip(id).limit(cantidad).sort({'popularity': -1}).toArray(function(err, docs) {
        callback(err, docs)
    })
}

exports.findOne = function(param, id, callback) {
    var collection = db.collection(param)

    console.log('paso por la busqueda find one')

    if (param == 'all_peliculas_TMDB') {
        query = {"id_TMDB": String(id)}
    } else if (param == 'all_series_TMDB') {
        query = {"id": parseInt(id)}
    } else if (param == 'comentarios_pelis') {
        query = {"id": String(id)}
    }

    console.log(query)
    //var objectId = db.getObjectId(key)
    collection.findOne(query, function(err, doc) {
        callback(err, doc)
    })
}

exports.insert = function(doc, callback) {
    var collection = db.collection('personas')

    collection.insertOne(doc, {
        w: 1
    }, function(err, result) {
        if (err) callback(err)
        else {
            var objectId = db.getObjectId(result.insertedId)
            collection.findOne({
                _id: objectId
            }, function(err, docs) {
                callback(err, docs)
            })
        }
    })
}

exports.update = function(doc, callback) {
    console.log(doc.objeto)
    console.log('/////////////////////////// ' + doc.objeto.coleccion)
    var col = doc.objeto.coleccion
    console.log('/////////////////////////// ' + typeof(col)  + '////' + col)
    var collection = db.collection(String(doc.objeto.coleccion))
    //var objectId = db.getObjectId(key)
    collection.update({id: String(doc.objeto.id)}, {$push: {comentario: {comentario: doc.objeto.comentario, user_name: String(doc.objeto.usuario),
     user_image: 'https://randomuser.me/api/portraits/men/27.jpg'}}}, function(err, result) {
        if (err) callback(err)
        else {collection.findOne({ id: String(doc.objeto.id)}, function(err, docs) {callback(err, docs)})
        }
    })
}

exports.remove = function(key, callback) {
    var collection = db.collection('personas')

    var objectId = db.getObjectId(key)
    collection.deleteOne({
        _id: objectId
    }, {
        w: 1
    }, function(err, result) {
        if (result.deletedCount > 0) {
            callback(err, {
                _id: key
            })
        } else {
            callback(err, result)
        }
    })
}