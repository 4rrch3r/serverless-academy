const apiError = require("../../utils/apiError");
//const sanitize = require('sanitize-filename');
const URL_REGEX = require('../../constants/regex').URL_REGEX;
const SHORT_LINK_LENGTH = require('../../constants/length').SHORT_LINK_LENGTH;
const validateLongLink = () => (req, res, next) => {
  try {
    const {link:userLongLink} = req.body;

    if(!userLongLink ) throw new apiError(400,'Required link was not provided.');
    
    if(typeof userLongLink!=='string' || !userLongLink.match(URL_REGEX))  throw new apiError(400,'Bad link format.');
    
    return next();
  } catch (err) {
    return next(err);
  }
};

const validateShortLink = () => (req, res, next) => {
  try {
    const { shortLink: userShortLink } = req.params;

  if(typeof userShortLink!=='string' || userShortLink.length!=SHORT_LINK_LENGTH)  throw new apiError(400,'Bad link format.');

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  validateLongLink,
  validateShortLink
};
