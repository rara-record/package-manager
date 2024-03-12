const axios = require("axios");
module.exports = async function () {
  const reponse = await axios.get("https://api.github.com/users");
  return reponse.data;
};
