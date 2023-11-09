const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const apiError = require("../utils/apiError.js");
const dbPool = require("../../config/db.js").dbPool;
const generateAuthTokens = require("../utils/tokens.js").generateAuthTokens;

const signUp = async (req, res, next) => {
  try {
    //extract validated data from request's body
    const { password: userPassword, email: userEmail } = req.body;
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedUserPassword = await bcryptjs.hash(userPassword, salt);
    //Save user's data
    let insertedUser = await dbPool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [userEmail, hashedUserPassword]
    );
    //sign access and refresh tokens
    const { accessToken, refreshToken } = await generateAuthTokens({id: insertedUser.rows[0].id,email: insertedUser.rows[0].email});

    return res
      .status(201)
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
      })
      .header("Authorization", accessToken)
      .json({
        success: true,
        data: {
          id: insertedUser.rows[0].id,
          accessToken: accessToken,
          refreshToken: refreshToken,
        },
      });
  } catch (err) {
    return next(err);
  }
};

const signIn = async (req, res, next) => {
  try {
    //extract validated data from request's body
    const { password: userPassword, email: userEmail } = req.body;
    //search user's data in db
    let selectedUser = await dbPool.query(
      "SELECT * FROM users WHERE email = $1 ",
      [userEmail]
    );
    if (selectedUser.rows.length === 0)
      throw new apiError(404, "User was not found.");
    //compare passwords
    const isPasswordCorrect = await bcryptjs.compare(userPassword,selectedUser.rows[0].password);
    if (!isPasswordCorrect) 
      throw new apiError(401, "Password is incorrect");
    //sign access and refresh tokens
    const { accessToken, refreshToken } = await generateAuthTokens({id: selectedUser.rows[0].id,email: selectedUser.rows[0].email});

    return res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
      })
      .header("Authorization", accessToken)
      .json({
        success: true,
        data: {
          id: selectedUser.rows[0].id,
          accessToken: accessToken,
          refreshToken: refreshToken,
        },
      });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  signUp,
  signIn,
};
