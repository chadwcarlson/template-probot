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

1. **Register the App on GitHub**

   When the app has deployed, you will need to first register the app with GitHub by clicking the **Register GitHub App** button on the homepage. Name the application anything you like, then click the **Create GitHub App** button. This will automatically save your `WEBHOOK_SECRET`, `PRIVATE_KEY`, and `APP_ID` variables to a `.env` file in your Platform.sh environment.

2. **Set up for production**

   If you visit the advanced settings for your now registered application `https://github.com/settings/apps/<APPLICATION_NAME>/advanced`, you will see that the first delivery attempt to Platform.sh has failed. This is because the application has not yet been set up for production in the `.environment` file. Retrieve the `clone` command from the `GIT` dropdown button in the Platform.sh management console and run the following commands:

   ```
   git clone <PROJECT ID>@git.<REGION>.platform.sh:<PROJECT ID>.git <PROJECT NAME>
   echo 'export NODE_ENV="production"' > .environment
   git add .environment && git commit -m "Set NODE_ENV to production."
   git push origin master
   ```

   The `master` environment will redeploy, and is now a prepared production application.  

3. **Verify**

    Return to the advanced settings for your application (`https://github.com/settings/apps/<APPLICATION_NAME>/advanced`) and click **Redeliver** to repeat the failed delivery described above. Since you have set up the app for production, it should now show a `200` successful response.

4. **Test on a repository**

    Visit your application's public page (`https://github.com/apps/<APPLICATION_NAME>`) and click **Install**. For now, select the **Only select repositories** option and choose a repository to test the application on.

    Go to the repository you chose and open a new issue. Your app should now be listening for newly opened issues, and has delivered a response in a comment. You can follow the steps within that comment for some additional tips for working with and customizing the app.



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
