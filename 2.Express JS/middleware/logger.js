// this is the logger function
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);

  next();
}

module.exports = logger;
