var express 	= require('express');
var router 		= express.Router();


/* GET photo by ID */
router.get('/', function(req, res) {
  console.log('calling info');
  var env = 'undefined';
  if( process.env.ENVIRONMENT){
    env = process.env.ENVIRONMENT;
  }
  console.log('env= ' + env );
  var envInfo = {
    environment: env,
    name: 'david'
  };
  res.send(envInfo);

});

module.exports = router;
