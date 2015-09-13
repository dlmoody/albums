//local stuff
module.exports = {
  db:{
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    database: process.env.ALBUM_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PSWD
  }
}


//var rdsConnection = {
//  host : 'photoalbumdb.c7w9t5yankex.us-east-1.rds.amazonaws.com',
//  port : 3306,
//  database : 'photoalbums',
//  user : 'photoappuser',
//  password : 'joshua3334'
//};
