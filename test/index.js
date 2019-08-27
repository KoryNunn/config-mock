process.chdir('./test'); // config looks in {cwd}/config, so we need to make sure that's /test

var test = require('tape');
var configMock = require('../');

test('Can get config-defined property', function(t){
    t.plan(1);
    var mockConfig = configMock({
        foo: 'foo'
    });

    t.equal(mockConfig.get('foo'), 'foo');
});

test('Can get undefined for config-defined property that is not set in our mock data', function(t){
    t.plan(1);
    var mockConfig = configMock({});

    t.equal(mockConfig.get('foo'), undefined);
});

test('Cannot get non-config-defined property', function(t){
    t.plan(1);
    var mockConfig = configMock({});

    t.throws(() =>
        mockConfig.get('nope')
    );
});

test('Cannot get non-config-defined property even if defined in our mock data', function(t){
    t.plan(1);
    var mockConfig = configMock({
        nope: 'value'
    });

    t.throws(() =>
        mockConfig.get('nope')
    );
});

test('can get nested data', function(t){
    t.plan(1);
    var mockConfig = configMock({
        bar: {
            baz: 'override'
        }
    });

    t.equal(mockConfig.get('bar.baz'), 'override');
});