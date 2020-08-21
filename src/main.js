// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("~/scss/main.scss");

import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap&text=/JAMstackreouhim",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@800&display=swap",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap&text=Dekopon",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;400;700&display=swap",
  });
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
