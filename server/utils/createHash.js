const crypto = require("crypto");

const hashString = (token) => {
  return crypto.createHash("md5").update(token).digest("hex");
};

module.exports = hashString;
