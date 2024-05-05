function cors(req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  next();
}

const allowedCors = ["http://localhost:3000"];

module.exports = cors;
