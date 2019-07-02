"use strict";
const path = require("path");
// const defaultSettings = require("./src/settings.js");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const name = defaultSettings.title || "vue Element Admin"; // page title
const port = 9966; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: "http://localhost:8000"
    // proxy: {
    // change xxx-api/login => mock/login
    // detail: https://cli.vuejs.org/config/#devserver-proxy
    // [process.env.VUE_APP_BASE_API]: {
    //   target: `http://127.0.0.1:${port}/mock`,
    //   changeOrigin: true,
    //   pathRewrite: {
    //     ["^" + process.env.VUE_APP_BASE_API]: ""
    //   }
    // }
    // }
    // after: require("./mock/mock-server.js")
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
};
