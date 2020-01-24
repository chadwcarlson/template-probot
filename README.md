# Probot GitHub Apps for Platform.sh

<p align="center">
<a href="https://console.platform.sh/projects/create-project?template=https://raw.githubusercontent.com/chadwcarlson/template-probot/updates/.platform.template.yaml">
    <img src="https://platform.sh/images/deploy/lg-blue.svg" alt="Deploy on Platform.sh" width="180px" />
</a>
</p>

This template builds a simple GitHub App using [Probot](https://github.com/probot/probot).

Probot is a framework for building GitHub Apps in Node.js.

## Services

* Node.js 12

## Post-install

* When the app has deployed, you will need to first register the app with GitHub by clicking the **Register GitHub App** button on the homepage.

## Customizations

The following files have been added to a basic Probot configuration. If using this project as a reference for your own existing project, replicate the changes below to your project.

* The `.platform.app.yaml`, `.platform/services.yaml`, and `.platform/routes.yaml` files have been added.  These provide Platform.sh-specific configuration and are present in all projects on Platform.sh.  You may customize them as you see fit.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## References

* [Probot](https://probot.github.io/)
