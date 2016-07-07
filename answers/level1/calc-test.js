/**
 * @description Unit tests for src/level1/calc.js
 */

import assert from 'assert';
import { add, minus, double, devide } from '../../src/level1/calc-improved';

describe('challenge1.js Test', () => {
  describe('add() method test', () => {
    /** 正常テスト */
    it('1 + 1 = 2', () => {
      assert.equal(2, add(1, 1));
    });

    it('1 + (-1) = 0', () => {
      assert.equal(0, add(1, -1));
    });

    it('2番目以降の引数を受け付けないことをチェック', () => {
      assert.equal(3, add(1, 2, 3, 4));
    });

    /** 異常系テスト */
    it('文字は受け付けないことをチェック', () => {
      assert.throws(add.bind(this, 'invalid', 'argument'), Error);
      assert.throws(add.bind(this, 2, 'argument'), Error);
      assert.throws(add.bind(this, 'argument', 1), Error);
    });
  });

  describe('minus() method test', () => {
    /** 正常テスト */
    it('1 - 1 = 0', () => {
      assert.equal(0, minus(1, 1));
    });

    it('2 - 1 = 1', () => {
      assert.equal(1, minus(2, 1));
    });

    it('1 - 2 = -1', () => {
      assert.equal(-1, minus(1, 2));
    });

    it('2番目以降の引数を受け付けないことをチェック', () => {
      assert.equal(1, minus(2, 1, 1, 1));
    });

    /** 異常系テスト */
    it('文字は受け付けないことをチェック', () => {
      assert.throws(minus.bind(this, 'invalid', 'argument'), Error);
      assert.throws(minus.bind(this, 2, 'argument'), Error);
      assert.throws(minus.bind(this, 'argument', 1), Error);
    });
  });

  describe('double() method test', () => {
    /** 正常テスト */
    it('1 * 2 = 2', () => {
      assert.equal(2, double(1, 2));
    });

    it('0 * 10 = 0', () => {
      assert.equal(0, double(0, 10));
    });

    it('(-2) * 10 = -20', () => {
      assert.equal(-20, double(-2, 10));
    });

    it('(-2) * (-10) = 20', () => {
      assert.equal(20, double(-2, -10));
    });

    it('2番目以降の引数を受け付けないことをチェック', () => {
      assert.equal(2, double(2, 1, 1, 1));
    });

    /** 異常系テスト */
    it('文字は受け付けないことをチェック', () => {
      assert.throws(double.bind(this, 'invalid', 'argument'), Error);
      assert.throws(double.bind(this, 2, 'argument'), Error);
      assert.throws(double.bind(this, 'argument', 1), Error);
    });
  });

  describe('devide() method test', () => {
    /** 正常テスト */
    it('2 / 1 = 2', () => {
      assert.equal(2, devide(2, 1));
    });

    it('0 / 10 = 0', () => {
      assert.equal(0, devide(0, 10));
    });

    it('(-4) * 2 = -2', () => {
      assert.equal(-2, devide(-4, 2));
    });

    it('2番目以降の引数を受け付けないことをチェック', () => {
      assert.equal(2, devide(2, 1, 1, 1));
    });

    /** 異常系テスト */
    it('0で数を割れないことをチェック', () => {
      assert.throws(devide.bind(this, 1, 0), Error);
    });

    it('文字は受け付けないことをチェック', () => {
      assert.throws(devide.bind(this, 'invalid', 'argument'), Error);
      assert.throws(devide.bind(this, 2, 'argument'), Error);
      assert.throws(devide.bind(this, 'argument', 1), Error);
    });
  });
});
