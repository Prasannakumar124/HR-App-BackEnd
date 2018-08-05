var dbuser="kumar";
var dbPassword="kumar123";
var dbAddress='@ds231961.mlab.com:31961';
var authSource='company';
var dbName="company";
const dburl=`mongodb://${dbuser}:${dbPassword}${dbAddress}/${dbName}`;
authkey="secreateKey"
module.exports={
DBURL:dburl,
USER:dbuser,
PASS:dbPassword,
AUTH:authSource,
AUTHKEY:authkey
}