module.exports = {
	applicationPort: 1337,
	database: function(){
		if(!process.env.ENVIRONMENT){
			var opsworks = require('./../opsworks');
			var opsWorksDB = opsworks.db;
			var rdsConnection = {
				host : opsWorksDB.host,
				port : opsWorksDB.port,
				database : opsWorksDB.database,
				user : opsWorksDB.username,
				password : opsWorksDB.password
			};
			return rdsConnection;


		}
		else {
			var local = require('./../config/local');
			console.log('connecting to ' + local.db.host);
			console.log('port ' + local.db.port);
			console.log('database ' + local.db.database);
			console.log('user ' + local.db.user);
			return local.db;
		}
	}

}
