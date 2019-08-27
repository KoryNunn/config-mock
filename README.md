# config-mock

mock for https://www.npmjs.com/package/config

# Why

You can just specify a /config/test.json I realize but sometimes you want to try a bunch of configs, this lets you progmatically create configs.

# Usage

```bash
npm i config-mock
```

```js
// Require
var configMock = require('config-mock');

// Create a mock
var mockConfig = configMock({
    foo: 'foo'
});

// Use as usual
mockConfig.get('foo')
```

Any path not specified in your actual ./config/default.json will still throw an error even if you add it in the mock.