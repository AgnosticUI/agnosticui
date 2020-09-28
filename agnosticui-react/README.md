# AgnosticUI React 

This is the [React version](https://github.com/AgnosticUI/agnosticui/tree/master/agnosticui-react) of [AgnosticUI](https://github.com/AgnosticUI/agnosticui).


## Project setup
```
yarn && yarn start 
```

## CJS & ES Modules

In `package.json` we have a `prepare` script which results in both CJS and ES builds. I had to do
some research to figure out how best to do this and these two articles helped:
- https://2ality.com/2017/07/npm-packages-via-babel.html
- https://madewithlove.com/optimizing-javascript-packages-for-tree-shaking/
