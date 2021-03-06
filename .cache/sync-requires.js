const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/BrettCimbalik/code/another-gatsby-tutorial/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-components-post-layout-js": hot(preferDefault(require("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/components/postLayout.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/about.js"))),
  "component---src-pages-company-team-js": hot(preferDefault(require("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/company/team.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/page-2.js")))
}

