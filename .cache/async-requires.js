// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/Users/BrettCimbalik/code/another-gatsby-tutorial/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-components-post-layout-js": () => import("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/components/postLayout.js" /* webpackChunkName: "component---src-components-post-layout-js" */),
  "component---src-pages-404-js": () => import("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-company-team-js": () => import("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/company/team.js" /* webpackChunkName: "component---src-pages-company-team-js" */),
  "component---src-pages-index-js": () => import("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/BrettCimbalik/code/another-gatsby-tutorial/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/BrettCimbalik/code/another-gatsby-tutorial/.cache/data.json")

