var db = require('./db')

exports.findAll = function(param, id, callback) {
    var collection = db.collection(param)
    console.log(param)
    console.log('esto es id: ' + id)
    if (param == 'Personas2') {
        var cantidad = 18
    } else {
        var cantidad = 18
    }
    id = parseInt(id)
    if (id == 0) {
        id = 0
    } else {
        id = id * 18
    }

    collection.find().skip(id).limit(cantidad).sort({
        'popularity': -1
    }).toArray(function(err, docs) {
        callback(err, docs)
    })
}

exports.findOne = function(param, id, callback) {
    var collection = db.collection(param)

    console.log('paso por la busqueda find one')

    if (param == 'all_peliculas_TMDB') {
        query = {
            "id_TMDB": String(id)
        }
    } else if (param == 'all_series_TMDB') {
        query = {
            "id": parseInt(id)
        }
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

exports.update = function(key, doc, callback) {
    var collection = db.collection('personas')

    var objectId = db.getObjectId(key)
    collection.update({
        _id: objectId
    }, {
        $set: doc
    }, {
        w: 1
    }, function(err, result) {
        if (err) callback(err)
        else {
            collection.findOne({
                _id: objectId
            }, function(err, docs) {
                callback(err, docs)
            })
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