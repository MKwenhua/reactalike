const theXHRstuff = require('./xhrRequests.js');

const EX = require("./src/ex.js");
const Layout = require("./components/layout.js");

EX.createComponent(
   Layout.render(), document.getElementById('container'));


theXHRstuff(Layout.githubHook);
