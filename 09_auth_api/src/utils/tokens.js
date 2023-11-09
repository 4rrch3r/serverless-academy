const jwt = require("jsonwebtoken");

const generateAuthTokens = async (payload) => {
    const accessToken = jwt.sign(
        payload,
        process.env.JWT_ACCESS_SECRET,
        {
          expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        }
      );
      const refreshToken = jwt.sign(
        payload,
        process.env.JWT_REFRESH_SECRET
      );
      return {
        accessToken:accessToken,
        refreshToken:refreshToken
      }
  };
module.exports={
    generateAuthTokens
}