var bunyan = require("bunyan");

var log = bunyan.createLogger({name: "atos_acumen"});

module.exports = log;
