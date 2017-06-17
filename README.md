# webpack2-ava-es6-react

This repo contains starter files and a working build system used to create a React application with unit and integration testing in Ava and Enzyme.

![Screenshot](/img/ava-coverage.png)

## How to get started

The project uses Webpack 2 to bundle and transpile the source code to a browser friendly format. You can run the project in two modes (dev and build). Run the following command to install dependencies, then choose a build mode.

```
$ npm install
```

### Development

Dev mode launches the project in the Webpack Dev Server with hot reloading for editing convience. Run the following command and open a browser to http://localhost:8080.

```
$ npm start
```

### Production

Build mode sets the environment to 'production' and optimizes the bundle for deployment. The files are optimized by using Webpack plugins and Gzipping the resulting bundle. Run the following command and view the files in the build folder.

```
$ npm run build
```

## How to run tests

The project uses Ava, JSDom, and Enzyme to unit test the components in the app. Run the following command to view a single run of the application tests.

```
$ npm test
```