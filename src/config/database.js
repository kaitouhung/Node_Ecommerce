const dotenv = require('dotenv');

dotenv.config();

let port, mongoUri;
switch (process.env.NODE_ENV) {
  case 'local':
    port = process.env.LOCAL_PORT;
    mongoUri = process.env.LOCAL_MONGO_URI;
    break;
  case 'staging':
    port = process.env.STAGING_PORT;
    mongoUri = process.env.STAGING_MONGO_URI;
    break;
}

module.exports = {
  port,
  mongoUri,
};
