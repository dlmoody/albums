module.exports = {
	applicationPort: 80,
	database: function(){
		//if(process.env.ENVIRONMENT){
			//var opsworks = require('./../opsworks');
			//var opsWorksDB = opsworks.db;
			var rdsConnection = {
				host : 'photoalbumdb.c7w9t5yankex.us-east-1.rds.amazonaws.com',
				port : 3306,
				database : 'photoalbums',
				user : 'photoappuser',
				password : 'joshua3334'
			};
			return rdsConnection;
		//}
		//else {
		//	console.log('ENVIRONMENT not found')
		//	var opsworks = require('./../opsworks');
			//var opsWorksDB = opsworks.db;
		//	var rdsConnection = {
		//		host : '127.0.0.1',
		//		port : 3306,
		//		database : 'photoalbums',
		//		user : 'root',
		//		password : 'nEl2qGBp'
		//	};
		//	return rdsConnection;
		//}
	}

}
