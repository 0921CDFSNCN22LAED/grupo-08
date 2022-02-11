const { findEmail } = require("../../lib/functions");

async function checkDeleteAcount(req, res, next) {
  const user = await findEmail(req.body.email);
  if (user.active !== 0) {
    next();
  } else {
    req.session.checkDeleteAcount = "Upps, usted ya borro esta cuenta";
    return res.redirect("/user/login");
  }
}
module.exports = checkDeleteAcount;
