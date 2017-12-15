var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient;

var database = null

exports.connect = function(url, done) {
	if (database) return done()

	MongoClient.connect(url, function(err,db) {
		if (err) return done(err)
		database = db
		done()
	})
}

exports.close = function(done) {
	if (database) {
		database.close(function(err, result) {
			if (err) return done(err)
			database = null
			done()
		})
	}
}

exports.collection = function(name) {
	return database.collection(name)
}

exports.getObjectId = function(id) {
	return mongodb.ObjectId(id)
}