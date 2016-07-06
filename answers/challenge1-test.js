import assert from 'assert';
import { add } from '../src/for_testing/challenge1';

describe('challenge1.js Test', () => {
  describe('add() method test', () => {
    it('1 + 1は2', done => {
      assert.equal(2, add(1, 1));
      done();
    });
  });
});
