const ipToInt = require("../utils/ip").ipToInt;
const intToIp = require("../utils/ip").intToIp;
const readAndTransformCsv = require("../utils/readAndTransformFile").readAndTransformCsv;

let countryIpInfo;

const detectCountry = async (req, res, next) => {
  try {
    //read and prepolate variable with countries info
    if (!countryIpInfo)
      countryIpInfo = await readAndTransformCsv("./data/IP2LOCATION-LITE-DB1.CSV","utf-8",next);
    //convert ip to numeric format
    let intIp = ipToInt(req.body.ip);
    //search country 
    let foundCountryInfo = countryIpInfo.find((element) => element.minRange <= intIp && element.maxRange >= intIp&& element.countryName!="-");
    
    return foundCountryInfo
      ? res.status(200).json({
          success: true,
          message: `Your country is ${
            foundCountryInfo.countryName
          }. Your ip lays in range from: ${intToIp(
            foundCountryInfo.minRange
          )} , to: ${intToIp(foundCountryInfo.maxRange)}`,
        })
      : res.status(404).json({
          success: false,
          message: `Your country was not found in our database.`,
        });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  detectCountry,
};
