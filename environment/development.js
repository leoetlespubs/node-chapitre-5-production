const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://alex:qwe@cluster0-l4izx.gcp.mongodb.net/twitter?retryWrites=true',
    cert: path.join( __dirname, '../ssl/localhost.crt'),
    key: path.join( __dirname, '../ssl/localhost.key'),
    portHttp: 3000,
    portHttps: 3001
}