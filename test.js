const assert = require('assert');
const index = require('./index.js');

describe('Module', () => {
    describe('MyFirstTest', () => {
        it ('index.jsが正しく機能しているか', () => {
            assert.equal(index.add(1, 2), 3);
        });
    });
})