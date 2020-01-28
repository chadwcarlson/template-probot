const yaml = require('js-yaml');
const fs   = require('fs');
const config = require("platformsh-config").config();

try {

  // Load the user-defined `app.yml` file (renamed in app container during build).
  var doc = yaml.safeLoad(fs.readFileSync('probot.app.yml', 'utf8'));

  // Load Platform.sh default strings.
  var platformsh = yaml.safeLoad(fs.readFileSync('setup/steps.yaml', 'utf8'));

  // If no description is given in the user-defined `app.yml` file, use the Platform.sh
  //   default template description.
  if (!("description" in doc)) {
    console.log("No description defined in manifest. Using Platform.sh default description.");
    doc.description = platformsh.description;
  }

  // Over-ride the `hook_attributes.url` attribute in `app.yml` to help setup the registration.
  doc.hook_attributes = { url: config.getPrimaryRoute().url };
  fs.writeFileSync('app.yml', yaml.safeDump(doc), function (err) {
    if (err) throw err;
  });

} catch (e) {
  console.log(e);
}
