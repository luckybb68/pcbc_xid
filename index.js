const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('3BYL577qY5', uuidlib.v4());
	}

module.exports = generateId
