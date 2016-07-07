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
    it('http://hoge.comは有効なURL', () => {
      assert(isValidUrl('http://hoge.com'));
    });

    it('https://hoge.comは有効なURL', () => {
      assert(isValidUrl('https://hoge.com'));
    });

    it('javascript:alert("fuga");は無効なURL', () => {
      assert(!isValidUrl('javascript:alert("fuga");'));
    });
  });

  describe('getClassName() test', () => {
    it('".class"から"class"を取得', () => {
      assert.equal('class', getClassName('.class'));
    });
  });
});
