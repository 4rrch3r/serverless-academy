const bcryptjs = require("bcrypt");
const jwt = require("jsonwebtoken");
const apiError = require("../utils/apiError.js");
const dbPool = require('../../config/db.js').dbPool;

const getUserInfo = async (req, res, next) => {
  try {
    //search user info in db
    let insertedUser = await dbPool.query(
      "SELECT * FROM users WHERE id = $1 ",
      [req.decodedUser.id]
    );
    //check if user was found
    if(insertedUser.rows.length===0)
      throw new apiError(404, "Information about such user was not found.");
 
    return res.status(200).json({
      "success": true,
      "data": {
        "id": insertedUser.rows[0].id,
        "email": insertedUser.rows[0].email
      }
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
    getUserInfo
};
