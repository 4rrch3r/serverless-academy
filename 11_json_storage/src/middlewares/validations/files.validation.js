const apiError = require("../../utils/apiError");
const sanitize = require('sanitize-filename');

const validateFileName = () => (req, res, next) => {
  try {
    const fileName = req.params.path;

    if(!fileName) throw new apiError(400,'Required file name was not provided.');

    const sanitizedFileName = sanitize(fileName);

    if(!sanitizedFileName) throw new apiError(400,'Bad file name.')
    
    req.sanitizedFileName = sanitizedFileName;

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  validateFileName,
};
