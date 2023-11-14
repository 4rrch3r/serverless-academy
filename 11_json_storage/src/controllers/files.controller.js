const fs = require("fs");
const apiError = require("../utils/apiError");
const DATA_STORAGE_PATH = require('../constants/data').DATA_STORAGE_PATH;
const DATA_STORAGE_FORMAT = require('../constants/data').DATA_STORAGE_FORMAT;

const getFile = async (req, res, next) => {
  try {
    const { sanitizedFileName } = req;

    //File with such name does not exist
    if (!fs.existsSync(DATA_STORAGE_PATH + sanitizedFileName + DATA_STORAGE_FORMAT)) throw new apiError(404, "File with such name does not exist.");
    
    const userFileData = JSON.parse(await fs.promises.readFile(DATA_STORAGE_PATH + sanitizedFileName + DATA_STORAGE_FORMAT,{ encoding: "utf-8" }));

    res.status(200).json({
      ...userFileData,
    });
  } catch (err) {
    return next(err);
  }
};

const uploadFile = async (req, res, next) => {
  try {
    const { body: userPayload, sanitizedFileName } = req;

    //validate headers
    if (req.headers["content-type"] != "application/json") throw new apiError(415, "Unsupported Media Type.");

    //such file name already used
    if (fs.existsSync(DATA_STORAGE_PATH + sanitizedFileName + DATA_STORAGE_FORMAT)) throw new apiError(400, "File with such name already exists.");
    
    await fs.promises.writeFile(DATA_STORAGE_PATH + sanitizedFileName + DATA_STORAGE_FORMAT,JSON.stringify(userPayload) );
    
    res.status(201).json({
      ...userPayload,
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = {
  getFile,
  uploadFile,
};
