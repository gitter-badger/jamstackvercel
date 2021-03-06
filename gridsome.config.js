// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Dekopon.JAMstack",
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "./content/posts",
        pathPrefix: "",
        template: "./src/templates/Post.vue",
      },
    },
    {
      use: "gridsome-plugin-pug",
      options: {
        pug: {},
        pugLoader: {},
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "gridsome-plugin-svg",
      options: {
        // default options below
        goesBothWays: false,
        svgo: [
          {
            removeTitle: false,
          },
          {
            prefixIds: {
              prefix: (_, { path }) => basename(path, ".svg"),
              delim: "-",
            },
          },
          {
            removeDesc: false,
          },
          {
            removeViewBox: false,
          },
          {
            sortAttrs: true,
          },
        ],
      },
    },
  ],
};
