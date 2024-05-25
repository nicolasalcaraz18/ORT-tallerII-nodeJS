export const myLogger = function (req, res, next) {
    console.log('LOGGED ' + req.method + " " + req.url);
    next();
  };

