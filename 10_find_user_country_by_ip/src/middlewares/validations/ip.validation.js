const apiError = require("../../utils/apiError");
const IPV4_REGEXP = require("../../constants/regexp.js").IPV4_REGEXP;
const validateIpV4 = () => (req, res, next) => {
  try {
    const ipV4 = req.body.ip;
    if (!ipV4) throw new Error(400, "Required ip was not provided.");

    const result = IPV4_REGEXP.exec(ipV4);

    if (!result) throw new apiError(400, "Wrong format of ip address.");

    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  validateIpV4,
};
