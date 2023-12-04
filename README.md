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
