const mongoose = require('mongoose')

function errorHandler(err, req, res, next) {
  //filter mongoose errors
  if (err instanceof mongoose.Error.ValidationError) {
    const validationErrors = {};
    // Extract validation error messages for each field
    for (const field in err.errors) {
      validationErrors[field] = err.errors[field].message;
    }
    return res.status(400).json({ errors: validationErrors });
  }
  //duplication error, as it isn't mongoose type error
  if(err.code==11000)
    return res.status(400).json({ success:false,message:err.message,  });

  const success = false;
  const status = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(status).json({ success, message });
}
module.exports = {
  errorHandler,
};
