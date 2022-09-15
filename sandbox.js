const bcryptjs = require('bcryptjs')


var salt = bcryptjs.genSaltSync(10);
var hash = bcryptjs.hashSync('admin', salt )

console.log(hash, `<<<~~~ ini hash`)


const isValidPassword = bcryptjs.compareSync('admin', hash)

console.log(isValidPassword)