var db = require('./db')

exports.findAll = function(param, callback) {
	var collection = db.collection(param)
	console.log(param)
	collection.find().limit(18).sort({'popularity': -1}).toArray(function(err,docs) {
		callback(err,docs)
	})
}

exports.findOne = function(key,callback) {
	var collection = db.collection('personas')

	var objectId = db.getObjectId(key)
	collection.findOne({_id: objectId}, function(err,doc) {
		callback(err,doc)
	})	
}

exports.insert = function(doc,callback) {
	var collection = db.collection('personas')

	collection.insertOne(doc, {w:1}, function(err,result) {
		if (err) callback(err)
		else {
			var objectId = db.getObjectId(result.insertedId)
			collection.findOne({_id: objectId},function(err,docs) {
				callback(err,docs)	
			})
		}
	})
}

exports.update = function(key,doc,callback) {
	var collection = db.collection('personas')

	var objectId = db.getObjectId(key)
	collection.update({_id: objectId},{$set: doc},{w:1},function(err,result){
		if (err) callback(err)
		else {
			collection.findOne({_id: objectId},function(err,docs) {
				callback(err,docs)	
			})
		}
	})	
}

exports.remove = function(key,callback) {
	var collection = db.collection('personas')

	var objectId = db.getObjectId(key)
	collection.deleteOne({_id: objectId},{w:1},function(err,result){
		if (result.deletedCount>0) {
			callback(err, {_id: key})
		} else {
			callback(err,result)
		}
	})	
}