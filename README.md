# my-react-app

# Parcel

-HMR - Hot Module Reloading
-Dev Build
-Local Server localhost: 1234
-File Watching Alogorithm - written c++
-Faster Builds because of caching
-Image optimization
-Minification
-Bundling
-Compressing files so that files will be smalled - remove space in files

- COnsistentent Hashing
- Code splitting
- Differential Bundling - supports older browser
- Diagnostics view - gives better error view on UI
- Error Handling
- Parcel gives support to test in https environment
- Parcel will remove extra unused code while minification
- DIfferent dev and production bundles

# 2 types for exports

- Default export
- Named export

# useEffect and in class components use of lifecycle methods

- useEffect is similar to componnetDidMount, componnetWillUnMount and componnetDidUpdate. In this
  useEffect(() => {}, []) ==============> componnetDidMount - after componnet gets render its called
  componnetDidUpdate ==> when state update with any API call or any state updation then this is called
  componentWIllUnMount ==> If we want to cleanup our timers and any allocation of memory then we can use cleanup function in useEffect or componnetWillUnMount function. both does same

in constructor we use super(props) to use/access Parent components variables

useEffect should not have async callback function because async function returns Promise but our callback should not return Promise. It only returns cleanup function.

# Lazy loading, custom hooks, Dynamic loading, code splitting, chunks, on demand loading

- create custom hooks which code we want to reuse and also if we create smaller smaller components then its reusable, maintainable, modular, more testable
- In large scale applications when bundle.js file gets increasing at that time which part of application we wants to some time after then we can load that componnet/ feature lazy by using lazy ans Suspense

# HOC Higher order components

- input Component ===> trnsforms ===> new component (with some enhancement)

# redux

- install redux-toolkit, react-redux install this 2 librraies
- build a store
- connect our storeto our app
- slice
  -In older versiongs of redux (vanilla) we were unable to mutate state directly. also we have to return state
  for ex. const newSatte = [...state]
  newState.push(items)
  return newState

but in redux-toolkit we can modify state and no need to return anything from it
here we can directly update state and no need to return it

for this mutation redux-toolkit uses immer.js

# testing

- React developer can do -

# Unit testing - test 1 component at a time, for ex. header component is rendering or not. we can test it in isolation

# integration testing - if we test search functionality it will filter all items and shows filetered items only. so many components calls and got change. that means integration testing

# end to end testing - how user will flow across the application,

for ex. user clicks on login then goes to landing page
tools - cypress

# Setting up testing in react app

- react-testing-librray - npm i @testing-librray/react
- jest - npm install -D jest
- installed babel dependencies - npm install --save-dev babel-jest @babel/core @babel/preset-env
- configure babel babel.config.js - add it from doc
- npx jest --init

if our jest verison > 29 then install go to set-up/jest-28
npm i -D jest-environment-jsdom

# Types of testing (devloper)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
