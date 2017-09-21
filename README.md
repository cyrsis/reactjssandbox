

## To do
1. Work on the Router -- Done
2. Work with Firebase -- Done
3. Work with Design Pattern
https://github.com/mannyhenri/react-patterns


## This guy is perfect

https://medium.com/@housecor

## Package.config can do for is is run task

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

- So powerful that i dont need Glup anymore
It save everyones ass so we dont have to manually do binding with different npm package
and it enable soruce contril

### no file scope -> modules scope 
### break code up
### scipt have to be in linearly way

## Barbel

ES6 to JS(ES5) 
-> Need Polyfill or transpilers (barbel this case)
because ES6 cannt run in most chrome and IE
-> No Auto Bind  do .bind in constructor
-> PropTypes decleared seperately
-> Default props declared seperately
-> Set initial state in constructor

ES6 stateless benenfit (use whenever possible)
-> No Class needed, less noise
-> Avoid this keyword
-> Enforced best -> only take care the render, the state would be in Redux
-> Do not support lifecycle methods

##           Es6 Class Components vs Stateless Components
local state                    | Everything else
Refs of underlying dom         |
willMount, lifecyclehook       |
Child function(nested function)
for performance                |

## Other ways to Create Components
object.create
Mixins
Parasitic Components
Stampit
bit.ly/react-define-component


##                Container vs Presentation
       Little to no markup    
       Redux.connect stateful| Nearly all markup
 Pass data and action  down  |Recive data and actions via props
 Knows Redux                 | Doesnt know about Redux
 Often stateful              | Typically functional components

## when Container?
When you notice that some component doesnt use props they recieve but merely forward them down. It is good time to introduce some container component

## Json Server
```bash
npm i -g json-server
```

```bash
json-server -p 8080 --watch db.json
```

## Library I can use today
 Ant Design of React - Ant Design
 TouchstoneJS - React.js powered UI framework for developing beautiful hybrid mobile apps.
 Elemental UI
 RSuite | 一个基于 React.js 的 Web 组件库
 Material-UI
 React-Bootstrap
 React + Foundation · Foundation as React components
 Essence - React Material Design Framework
 React-MDL: React Components for Material Design Lite
 Belle - Configurable React Components with great UX
 MUI - Material Design CSS Framework
 Grommet
 React Toolbox
 react-blazecss 0.4.3 Demo
 Pivotal UI: Intro
 BFD UI
 Semantic UI React
 Amaze UI React - Amaze UI components build with React
 Blueprint – A React UI toolkit for the web
归档至：

#Live Server (Get you up and running)
npm install -g live-server

http://gorangajic.github.io/react-icons/md.html

http://www.material-ui.com/#/

https://react-bootstrap.github.io/getting-started.html

http://blueprintjs.com/

https://github.com/airbnb/react-dates

https://griddlegriddle.github.io/Griddle/

https://lernajs.io/

## Why react?
one way data flow structure
-> React do the same thing with 2 way binding with 
  State (Change in state,react would get render done for me) 
  Props (Pass into sub component)
  
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

The best Ui
https://github.com/akveo/kittenTricks

### Demo Apps

https://github.com/fbsamples/f8app

https://github.com/iSimar/HackerNews-React-Native

https://github.com/FaridSafi/react-native-gifted-chat
messager


Stock Apps
https://github.com/7kfpun/FinanceReactNative

Camera
https://github.com/lwansbrough/react-native-camera

NBA
https://github.com/wwayne/react-native-nba-app

500px
http://isomorphic500.herokuapp.com/featured/upcoming

## Why Redux Sage
LOOK PERFECT for for my do promise and async request
 -- listens for actions and dispatch other actions(using effect)
 -- Redux Middleware
 -- More sophisticated thn redux-thunk
 -- Manges side-effects
 -- Depends on ES6 and Yield
 -- Consumes and emits actions
 -- Works without Redux
 -- Effective for async operations
 -- A long-running background process
 -- Responsible for application's side effect
 -- Responsible for application's side effect
 -- Yield conjunction with ES6 Yield

## Redux Thunk vs Redux Saga
by Redux Creator vs Third part developer
Runs in JS       vs ES6 only
No Build in Async vs Yield
side-effect vs use EFFECTS
 
## Why redux

Single store for every state
Reduce Boilderplate
Isomorphic/Universal Friendly
Immutable Store 
    enables 
    Hot Reloading
    Time-Travel debugging
Small 2Ks

$ react-native install @shoutem/ui
$ react-native install firebase
$ react-native install moment
$ react-native install redux
$ react-native install redux-thunk
$ react-native install redux-logger

$ react-native install 
$ react-native-keyboard-aware-scroll-view

Steps to use reduex
1.Add a constant to the constants file. Something like `const GREAT_COURSE = ‘GREAT_COURSE`

2.Add an action creator to the actions folder. Return an action JavaScript object with a type of the constant you created.

3.Add a reducer to the reducers folder that handles this action creat

## Clean npm

```bash
 npm cache clean
```
 
## Login with Firebase
No Author

{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}

Default Rules
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}

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

