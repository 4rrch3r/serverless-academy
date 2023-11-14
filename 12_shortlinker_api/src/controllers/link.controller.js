const ShortUniqueId = require("short-unique-id");
const linkService = require("../services/link.service");
const SHORT_LINK_LENGTH = require("../constants/length").SHORT_LINK_LENGTH;
const uid = new ShortUniqueId();
const BASE_URL = process.env.BASE_URL;
const PORT = process.env.PORT;

const createShortLink = async (req, res, next) => {
  try {
    const { link: userLongLink } = req.body;
    //try to find such link in database
    const foundLink = await linkService.getLinkByQuery({longLink: userLongLink});
    //return user cutted link
    if (foundLink)
      return res
        .status(200)
        .json({ success: true, shortLink: foundLink.shortLink });
    //create object with new links
    const newLink = {
      shortLink: BASE_URL + PORT + "/" + uid.rnd(SHORT_LINK_LENGTH),
      longLink: userLongLink,
    };
    //save it to database
    const savedLink = await linkService.createLink(newLink);
    //return user cutted link
    return res
      .status(201)
      .json({ success: true, shortLink: savedLink.shortLink });
  } catch (err) {
    return next(err);
  }
};
const getShortLink = async (req, res, next) => {
  try {
    const { shortLink: userShortLink } = req.params;
    //try to find such link in database
    const foundLink = await linkService.getLinkByQuery({shortLink: BASE_URL + PORT + "/" + userShortLink});
    //redirect to resource if such was found
    return foundLink
      ? res.redirect(302, foundLink.longLink)
      : res.status(404).json({
          success: false,
          message: "Such cutted link was not found",
        });
  } catch (err) {
    return next(err);
  }
};
module.exports = {
  createShortLink,
  getShortLink,
};
