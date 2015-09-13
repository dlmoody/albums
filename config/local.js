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
