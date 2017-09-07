
## Package.config can do for uis is run task

## Note for barbel is that should not do multiple version at the same time

## Nodjs is Wrapper for V8 Google engin
-- Common js is the dependency manager

## Transform from create class

Migrating from React.createClass
When React was initially released, there was no idiomatic way to create classes in JavaScript, so we provided our own: React.createClass.

Later, classes were added to the language as part of ES2015, so we added the ability to create React components using JavaScript classes. Along with functional components, JavaScript classes are now the preferred way to create components in React.

For your existing createClass components, we recommend that you migrate them to JavaScript classes. However, if you have components that rely on mixins, converting to classes may not be immediately feasible. If so, create-react-class is available on npm as a drop-in replacement:

// Before (15.4 and below)
var React = require('react');

var Component = React.createClass({
  mixins: [MixinA],
  render() {
    return <Child />;
  }
});

// After (15.5)
var React = require('react');
var createReactClass = require('create-react-class');

var Component = createReactClass({
  mixins: [MixinA],
  render() {
    return <Child />;
  }
});
Your components will continue to work the same as they did before.

The codemod for this change attempts to convert a createClass component to a JavaScript class, with a fallback to create-react-class if necessary. It has converted thousands of components internally at Facebook.

Basic usage:

jscodeshift -t react-codemod/transforms/class.js path/to/components 0

## need the part from here


https://react.parts/native

## Current working on

https://medium.com/@taweesoft
## Bootstrap template

https://startbootstrap.com/template-categories/all/
## Webpack

It save everyones ass so we dont have to manually do binding with different npm package
and it enable soruce contril

### no file scope -> modules scope 
### break code up
### scipt have to be in linearly way

## Barbel

ES6 to JS(ES5) 
-> Need Polyfill or transpilers (barbel this case)
because ES6 cannt run in most chrome and IE

## Library I can use today

#Live Server (Get you up and running)
npm install -g live-server

http://gorangajic.github.io/react-icons/md.html

http://www.material-ui.com/#/

https://react-bootstrap.github.io/getting-started.html

http://blueprintjs.com/

https://github.com/airbnb/react-dates

https://griddlegriddle.github.io/Griddle/

https://lernajs.io/

## why we need proptypes

if someone else use my componet, I have to make sure props are correct
For the vailation

## Functiona Library
(Partial function)
Ramda (learn this first) http://ramdajs.com/0.17/docs/#partial
Unders core
http://underscorejs.org/#partial

Lodash
https://lodash.com/docs/4.17.4#partial


Fine, I am sold,
 ?  Replace if else
 map Replace forloop
 --Maybe RxJx can do hell lot more
 
## For React Native

$ react-native install @shoutem/ui
$ react-native install firebase
$ react-native install moment
$ react-native install redux
$ react-native install redux-thunk
$ react-native install redux-logger
$ react-native install 
$ react-native-keyboard-aware-scroll-view

## Clean npm

```bash
 npm cache clean
```
 
## Login with Firebase

Probably a better idea with Firebase

https://github.com/tylermcginnis/re-base

https://demo.react-redux-firebase.com/projects

https://github.com/prescottprue/react-redux-firebase/tree/master/examples/complete/material
http://docs.react-redux-firebase.com/history/v2.0.0/

## Esline someday

https://stackoverflow.com/questions/34700062/intellij-plugin-airbnb-eslint-w-react
https://groundberry.github.io/development/2017/06/11/create-react-app-linting-all-the-things.html

## ES5 vs ES5 Quick React

http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8

##Apps creation

```bash
create-react-app reactjssandbox
cd react-redux-example
```

## run 

```bash
npm test
```
## Add Redux

Redux is like a bank that keep track of state. I can do it with redius

```bash
yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk

```
or 
```bash
npm install --save redux react-redux react-router-dom react-router-redux@next redux-thunk

```
Optional
```bash
npm install -- save react-bootstrap react-router lodash Reflux superagent  react-router-bootstrap
```
For my Good Friend Intellij

```bash
npm install --save @types/react
```

## const vs let vs var
Use const (can be change)
then let
somehow var

## Compare Yarn and NPM
yarn install
npm install

yarn add 
npm install -s

yarn start
npm start

