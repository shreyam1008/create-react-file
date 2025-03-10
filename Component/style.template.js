"use strict";

const path = require("path");
const common = require(path.resolve(__dirname, "../common"));

const { createModuleName } = common;

module.exports = (opts) => `
.${createModuleName(opts)} {
  
}
`;
