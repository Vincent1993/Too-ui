const fs = require('fs');
const path = require('path');
const components = require('./get-components.js');
const kebabCase = require('lodash/kebabCase');

module.exports = (() => {
  components.forEach(component => {
    fs.copyFile(
      path.resolve(__dirname, `../src/components/${component}/styles/index.js`),
      path.resolve(__dirname, `../lib/${kebabCase(component)}/style/index.js`),
      e => {
        fs.writeFile(
          path.resolve(
            __dirname,
            `../lib/${kebabCase(component)}/style/index.js`
          ),
          `require('./index.css')`,
          e => {
            console.log(e);
          }
        );
      }
    );
  });
})();
