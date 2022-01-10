const { findByField } = require("../../services/users");

function rememberUserCookieMiddleware(req, res, next) {
  const emailInCookie = req.cookies.userEmail;
  const user = findByField("email", emailInCookie);
  if (user) {
    req.session.userLogged = user;
  }
  next();
}
module.exports = rememberUserCookieMiddleware;
