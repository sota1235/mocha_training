import assert from 'assert';
import { add } from '../src/for_testing/challenge1';

describe('challenge1.js Test', () => {
  describe('add() method test', () => {
    /** 正常テスト */
    it('1 + 1 = 2 : 2つの引数でチェック', done => {
      assert.equal(2, add(1, 1));
      done();
    });

    it('1 + (-1) = 0 : 負の数に対応しているかチェック', done => {
      assert.equal(0, add(1, -1));
      done();
    });

    it('2番目以降の引数を受け付けないことをチェック', done => {
      assert.equal(3, add(1, 2, 3, 4));
      done();
    });

    /** 異常系テスト */
    it('文字は受け付けないことをチェック', done => {
      assert.throws(add.bind(this, 'invalid', 'argument'), Error);
      assert.throws(add.bind(this, 2, 'argument'), Error);
      assert.throws(add.bind(this, 'argument', 1), Error);
      done();
    });
  });
});
