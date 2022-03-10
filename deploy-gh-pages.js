var ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    message: "deploy: update website"
  },
  () => {
    console.log(
      "Deployment completed: https://milleus.github.io/portfolio-space-tourism/"
    );
  }
);
