var config = require('config');
var get = require('unbox/get');

function getConfig(reference, path) {
    // validate real config
    config.get(path);

    return get(reference, path);
};

function createMockConfig(mockData) {
    return {
        get: getConfig.bind(null, mockData)
    }
}

module.exports = createMockConfig;
