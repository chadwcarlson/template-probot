const yaml = require('js-yaml');
const fs   = require('fs');
const config = require("platformsh-config").config();

try {
  var doc = yaml.safeLoad(fs.readFileSync('app.yml', 'utf8'));
  doc.url = config.getPrimaryRoute().url;
  fs.writeFileSync('app.yml', yaml.safeDump(doc), function (err) {
    if (err) throw err;
  });
  var env = `WEBHOOK_PROXY_URL=${config.getPrimaryRoute().url}`;
  fs.writeFileSync('run/.env', env, function (err) {
    if (err) throw err;
  });

} catch (e) {
  console.log(e);
}
