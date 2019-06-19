'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

// 프로젝트 폴더의 심볼 링크가 모두 해결되었는지 확인하십시오:
// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
// 절대경로+상대경로 병합
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const envPublicUrl = process.env.PUBLIC_URL;

// Custom properties 사용
const envNodeEnv = process.env.NODE_ENV;
const commonPropertiesPath = resolveApp('config/common.properties.js');
const devPropertiesPath = resolveApp('config/devServer.properties.js');
const prodPropertiesPath = resolveApp('config/prod.properties.js');
const libPropertiesPath = resolveApp('config/lib.properties.js');

let appOutputDir, libOutputDir, libIndex, envPropertiesPath;
let libVendors = [];

if (envNodeEnv === 'production') {
  const prodProperties = require(prodPropertiesPath);
  appOutputDir = prodProperties.outputDir;
  envPropertiesPath = prodPropertiesPath;
} else if (envNodeEnv === 'development') {
  envPropertiesPath = devPropertiesPath;
} else {
  const libProperties = require(libPropertiesPath);
  libOutputDir = libProperties.outputDir;
  libIndex = libProperties.index;
  libVendors = libProperties.vendors || [];
  envPropertiesPath = libPropertiesPath;
}

const envProperties = require(envPropertiesPath);
const index = envProperties.index;
const vendors = envProperties.vendors || [];
const propertiesPublicUrl = envProperties.publicUrl;

/**
 * 경로 끝에 /를 붙이거나 빼는 함수
 */
function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  } else {
    return inputPath;
  }
}

const getPublicUrl = appPackageJson =>
  propertiesPublicUrl || envPublicUrl || require(appPackageJson).homepage;

// "PUBLIC_URL" 환경변수나 "hompage" 필드를 이용해 앱이 제공되는 "public path"를 추론한다.
// 웹팩은 /todos/42와 같은 중첩 URL에 대해 index.html을 제공할 수 있는 단일 페이지 앱에서도 올바른 href를 HTML에 넣기 위해 이를 알아야 한다.
// /todos/42/static/js/bundle.7289d.js와 같은 것을 로드하고 싶지 않기 때문에 HTML에서는 상대 경로를 사용할 수 없다.
// 우리는 root를 알아야 한다.
// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// 확장자와 같이 병합
// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('dist' + appOutputDir), // resolveApp('build'),
  appPublic: resolveApp('resource'), // resolveApp('public'),
  appHtml: resolveApp('src/index.html'), // resolveApp('public/index.html'),
  appIndexJs: resolveApp(index || 'src/index.js'), // appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  appVendorJsList: vendors.map(vendor => resolveApp(vendor)),
  libBuild: resolveApp(`dist${libOutputDir}` || 'dist/lib'),
  libIndexJs: resolveApp(libIndex || 'src/lib/index.js'),
  libVendorJsList: libVendors.map(vendor => resolveApp(vendor)),
  commonProperties: commonPropertiesPath,
  envProperties: envPropertiesPath,
};

// @remove-on-eject-begin
const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);

// config before eject: we're in ./node_modules/react-scripts/config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('dist' + appOutputDir), // resolveApp('build'),
  appPublic: resolveApp('resource'), // resolveApp('public'),
  appHtml: resolveApp('src/index.html'), // resolveApp('public/index.html'),
  appIndexJs: resolveApp(index || 'src/index.js'), // appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  proxySetup: resolveApp('src/setupProxy.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('package.json')),
  servedPath: getServedPath(resolveApp('package.json')),
  appVendorJsList: vendors.map(vendor => resolveApp(vendor)),
  libBuild: resolveApp(`dist${libOutputDir}` || 'dist/lib'),
  libIndexJs: resolveApp(libIndex || 'src/lib/index.js'),
  libVendorJsList: libVendors.map(vendor => resolveApp(vendor)),
  commonProperties: commonPropertiesPath,
  envProperties: envPropertiesPath,
  // These properties only exist before ejecting:
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'), // This is empty on npm 3
  appTypeDeclarations: resolveApp('src/react-app-env.d.ts'),
  ownTypeDeclarations: resolveOwn('lib/react-app.d.ts'),
};

const ownPackageJson = require('../package.json');
const reactScriptsPath = resolveApp(`node_modules/${ownPackageJson.name}`);
const reactScriptsLinked =
  fs.existsSync(reactScriptsPath) &&
  fs.lstatSync(reactScriptsPath).isSymbolicLink();

// config before publish: we're in ./packages/react-scripts/config/
if (
  !reactScriptsLinked &&
  __dirname.indexOf(path.join('packages', 'react-scripts', 'config')) !== -1
) {
  console.log('Paths work 3rd config case');
  module.exports = {
    dotenv: resolveOwn('template/.env'),
    appPath: resolveApp('.'),
    appBuild: resolveOwn('../../build'),
    appPublic: resolveOwn('template/public'),
    appHtml: resolveOwn('template/public/index.html'),
    appIndexJs: resolveModule(resolveOwn, 'template/src/index'),
    appPackageJson: resolveOwn('package.json'),
    appSrc: resolveOwn('template/src'),
    appTsConfig: resolveOwn('template/tsconfig.json'),
    appJsConfig: resolveOwn('template/jsconfig.json'),
    yarnLockFile: resolveOwn('template/yarn.lock'),
    testsSetup: resolveModule(resolveOwn, 'template/src/setupTests'),
    proxySetup: resolveOwn('template/src/setupProxy.js'),
    appNodeModules: resolveOwn('node_modules'),
    publicUrl: getPublicUrl(resolveOwn('package.json')),
    servedPath: getServedPath(resolveOwn('package.json')),
    // These properties only exist before ejecting:
    ownPath: resolveOwn('.'),
    ownNodeModules: resolveOwn('node_modules'),
    appTypeDeclarations: resolveOwn('template/src/react-app-env.d.ts'),
    ownTypeDeclarations: resolveOwn('lib/react-app.d.ts'),
  };
}
// @remove-on-eject-end

module.exports.moduleFileExtensions = moduleFileExtensions;
