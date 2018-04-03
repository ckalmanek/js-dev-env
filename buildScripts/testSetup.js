// This file isn't transpiled, so must use CommonsJS and ES5

// Register babel with Mocha to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand (e.g., import './index.css')
require.extensions['.css'] = function() {};
