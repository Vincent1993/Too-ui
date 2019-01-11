const shell = require('shelljs');
const fs = require('fs');
const path = require('path');
const kebabCase = require('lodash/kebabCase');

async function getComponentName() {
  const files = await fs.readdirSync(
    path.resolve(__dirname, '../src/components/'),
    {
      encoding: 'utf-8'
    }
  );

  files.forEach(file => {
    if (!/.js/.test(file)) {
      shell.exec(
        `yarn vue-cli-service build  --name index --target lib ./src/components/${file}/index.js --dest lib/${kebabCase(
          file
        )} --no-clean`
      );
      shell.exec(
        `yarn vue-cli-service build  --name index --target lib ./src/components/${file}/styles/index.js --dest lib/${kebabCase(
          file
        )}/styles/index.js --no-clean`
      );
      shell.mv(
        path.resolve(__dirname, `../lib/${kebabCase(file)}/index.common.js`),
        path.resolve(__dirname, `../lib/${kebabCase(file)}/index.js`)
      );
      shell.mkdir(path.resolve(__dirname, `../lib/${kebabCase(file)}/style`));
      // shell.mv(
      //   path.resolve(__dirname, `../lib/${file}/index.css`),
      //   path.resolve(__dirname, `../lib/${file}/style/index.css`)
      // );
    } else {
      shell.exec(
        `yarn vue-cli-service build  --target lib --name too-ui ./src/components/index.js --dest lib --no-clean`
      );
    }
  });
}

getComponentName();
