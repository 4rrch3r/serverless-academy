const linkModel = require("../models/link.model");

const getLinkByQuery = async (query) => {
    const foundLink = await linkModel.findOne(query).exec();
    return foundLink;
};
const createLink = async (newLink) => {
    const newLinkModel = new linkModel(newLink);
    const savedLink = await newLinkModel.save();
    return savedLink;
};

module.exports = {
  getLinkByQuery,
  createLink,
};
