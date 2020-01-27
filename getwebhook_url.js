const config = require("platformsh-config").config();

// process.env["WEBHOOK_PROXY_URL"] = config.getPrimaryRoute();
console.log(config.getPrimaryRoute());
