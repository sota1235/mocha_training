import assert from 'assert';

// describe() ... テストの仲間分け. 何回層でもネスト可能
describe('Sample test', () => {
  // it() ... ユニットテストの1単位
  it('1 is 1', done => {
    assert.equal(1, 1);
    // done() ... これを実行することでテストの完了を知らせる
    done();
  });
});

// First mission
