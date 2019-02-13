const functions = require("firebase-functions");
const { Nuxt, Builder } = require("nuxt-edge");
const express = require("express");
const app = express();
const config = {
  dev: false,
  buildDir: "functions",
  build: {
    publicPath: "/hosting"
  }
};
const nuxt = new Nuxt(config);

function handleRequest(req, res) {
  const isProduction = process.env.NODE_ENV === "development" ? false : true;
  if (isProduction)
    res.set("Cache-Control", "public, max-age=150, s-maxage=150");

  try {
    nuxt.render(req, res);
  } catch (err) {
    nuxt.render(err);
  }
}

app.use(handleRequest);
exports.nuxtApp = functions.https.onRequest(app);
