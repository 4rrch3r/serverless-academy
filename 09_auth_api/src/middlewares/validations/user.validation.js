const apiError = require("../../utils/apiError");
const EMAIL_REGEXP = require("../../constants/regex.js");
const PASSWORD_MIN_LENGTH = require("../../constants/length.js");

const validateSignUp = () => (req, res, next) => {
  try {
    //extract data from request's body
    const { password: userPassword, email: userEmail } = req.body;
    if (!userPassword || !userEmail) 
      throw new apiError(400, "Required data was not provided.");
    //validate data
    if (typeof userPassword != "string" || typeof userEmail != "string" || userPassword.length < PASSWORD_MIN_LENGTH || !userEmail.match(EMAIL_REGEXP))
      throw new apiError(400, "Data validation failed.");

    return next();
  } catch (err) {
    return next(err);
  }
};

const validateSignIn = () => (req, res, next) => {
  try {
    //extract data from request's body
    const { password, email } = req.body;
    //validate data
    if (!password || !email) 
      throw new apiError(400, "Bad request. Required data was not provided.");

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  validateSignUp,
  validateSignIn,
};
