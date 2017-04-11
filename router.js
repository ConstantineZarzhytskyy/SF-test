var express = require('express');
var router = express.Router();
var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  loginUrl : 'https://login.salesforce.com'
});

router.get('/', function (req, res) {

  conn.login('email', 'passToken', function(err, cb) {
    if (err) { return console.error(err); }

    conn.query('SELECT Id, Name FROM Account', function(err, cb2) {
      if (err) { return console.error(err); }

      res.send(cb2);
    });
  });

});


module.exports = router;