const mongoose = require('mongoose');
const express = require('express');
const app = express();
const webpack = require('webpack'); //webpack
const webpackDevMiddleware = require('webpack-dev-middleware'); //webpack
const config = require('../webpack.config.js'); //webpack
const myApp = require('./app');

const dbAddress = process.env.DB_ADDRESS || 'localhost';


mongoose.connect(`mongodb://${dbAddress}/weGotData`);
const compiler = webpack(config); //webpack

app.use(webpackDevMiddleware(compiler, {  //webpack
  publicPath: config.output.publicPath,  //webpack
})); //webpack

myApp.listen(3002, () => {
  console.log('Listening on port 3002');
});

// =============================================================== //
// ===== webpack lines commented for proxy server purposes ======= //
// =============================================================== //
