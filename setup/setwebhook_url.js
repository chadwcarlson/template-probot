const yaml = require('js-yaml');
const fs   = require('fs');
const config = require("platformsh-config").config();


// const default_description = `# GitHub/Probot App Template for Platform.sh
//
// This is a basic template for setting up a production-ready GitHub App using Probot on Platform.sh.
//
// Once the template is initialized, the installer will direct you to register the app with GitHub. After that, it is set up to leave a welcome message comment on each newly opened issue for each repository it has been installed on.
//
// Afterwards, you can update the template to perform more actions using the GitHub API, including adding additional permissions.
//
// `;

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
