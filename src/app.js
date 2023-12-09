const { buildLogger } = require("./plugins");

const logger = buildLogger("app.js");

logger.log("This is INFO");
logger.error("This is a ERROR");