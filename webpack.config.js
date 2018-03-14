module.exports = {
  // Everything we are looking at here is client-side code
  // So entry/starting point is our main client.js file
  entry: './client.js',

  // Mode 'development' or 'production' for defaults
  mode: 'development',

  // Where does our built file go
  output: {
    filename: 'bundle.js', // <- most commonly used name
    path: `${__dirname}/dist` // <- optional, same as default
  }
};