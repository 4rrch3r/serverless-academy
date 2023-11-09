const jwt = require("jsonwebtoken");
const apiError = require("../utils/apiError.js");
const generateAuthTokens = require("../utils/tokens.js").generateAuthTokens;

const validateAndUpdateTokens = () => async (req, res, next) => {
  try {
    //extract tokens
    const accessToken = req.headers["authorization"];
    const refreshToken = req.cookies["refreshToken"];

    //tokens were not found
    if (!accessToken && !refreshToken) 
      throw new apiError(401, "Unauthorized");

    try {
      //verify access token 
      const decoded = jwt.verify(accessToken.split("Bearer ")[1],process.env.JWT_ACCESS_SECRET);
      req.decodedUser = { id: decoded.id, email: decoded.email };
      return next();
    } catch (error) {
      //search for refresh token
      if (!refreshToken) 
        throw new apiError(401, "Unauthorized");
      try {
        //verify refresh token
        const decoded = jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET);
        req.decodedUser = { id: decoded.id, email: decoded.email };
        //update refresh and access tokens
        const { accessToken:newAccessToken, refreshToken:newRefreshToken } = await generateAuthTokens({ id: decoded.id, email: decoded.email });
        
        res
          .cookie("refreshToken", newRefreshToken, { httpOnly: true })
          .header("Authorization", newAccessToken);
        return next();
      } catch (error) {
        throw new apiError(403, "Forbidden");
      }
    }
  } catch (err) {
    return next(err);
  }
};
module.exports = validateAndUpdateTokens;
