/**
 * @description Unit tests for src/level2/string-util
 */

import assert from 'assert';
import { escape, isValidUrl, getClassName } from '../../src/level2/string-util';

describe('Unit tests for string-util', () => {
  describe('escape() test', () => {
    it('HTML文字列をエスケープすること', () => {
      const expected = '&amp; &#x27; &#x60; &quot; &lt; &gt;';
      assert.equal(expected, escape('& \' ` " < >'));
    });
  });

  describe('isValidUrl() test', () => {
    // TODO
  });

  describe('getClassName() test', () => {
    // TODO
  });
});
