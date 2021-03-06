# redux-ignore

[![NPM version (>=1.1)](https://img.shields.io/npm/v/redux-ignore.svg?style=flat-square)](https://www.npmjs.com/package/redux-ignore) [![Build Status](https://img.shields.io/travis/omnidan/redux-ignore/master.svg?style=flat-square)](https://travis-ci.org/omnidan/redux-ignore) [![Dependencies](https://img.shields.io/david/omnidan/redux-ignore.svg?style=flat-square)](https://david-dm.org/omnidan/redux-ignore) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/) [![https://gratipay.com/omnidan/](https://img.shields.io/gratipay/omnidan.svg?style=flat-square)](https://gratipay.com/omnidan/)

_higher-order reducer to ignore redux actions_


## Installation

```
npm install --save redux-ignore
```


## API

```js
import ignoreActions from 'redux-ignore';
ignoreActions(reducer, [ARRAY_OF_ACTIONS])
ignoreActions(reducer, (action) => !action.valid)
```


## Ignoring actions

`redux-ignore` is a reducer enhancer (higher-order reducer), it provides the
`ignoreActions` function, which takes an existing reducer and either:

- An array of actions to be ignored, or...
- A predicate function for filtering out actions.

Firstly, import `redux-ignore`:

```js
// Redux utility functions
import { combineReducers } from 'redux';
// redux-ignore higher-order reducer
import ignoreActions from 'redux-ignore';
```

Then, add `ignoreActions` to your reducer(s) like this:

```js
combineReducers({
  counter: ignoreActions(counter, [INCREMENT_COUNTER])
});
```

Now you won't be able to increment the counter anymore, because the
`INCREMENT_COUNTER` action is ignored.

Alternatively, you can ignore actions via a predicate function:

```js
combineReducers({
  counter: ignoreActions(counter, (action) => action.type === INCREMENT_COUNTER)
});
```

## What is this magic? How does it work?

Have a read of the [Implementing Undo History recipe](https://rackt.github.io/redux/docs/recipes/ImplementingUndoHistory.html)
in the Redux documents, which explains in detail how higher-order reducers work.


## License

MIT, see `LICENSE.md` for more information.
