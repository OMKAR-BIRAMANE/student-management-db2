const ibmdb = require("ibm_db");

const connStr = "DATABASE=ZOO;HOSTNAME=localhost;PORT=50000;PROTOCOL=TCPIP;UID=db2admin;PWD=sanchit;";

function connectToDb(callback) {
    ibmdb.open(connStr, (err, conn) => {
        if (err) return callback(err);
        callback(null, conn);
    });
}

module.exports = connectToDb;
