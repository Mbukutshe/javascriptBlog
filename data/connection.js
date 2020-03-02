let Connection = require('mssql/msnodesqlv8');

var config = {    
    driver: 'msnodesqlv8',
    connectionString:'Driver={SQL Server Native Client 11.0};Server={(localdb)\\MSSQLLocalDB};Database={BlogAppDB};Trusted_Connection={yes};'
};
module.exports = {'connection': Connection, 'details': config};