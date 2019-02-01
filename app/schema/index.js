var Ajv = require('ajv');
var ajv = new Ajv({
    allErrors: true,
   
});


module.exports = ajv;