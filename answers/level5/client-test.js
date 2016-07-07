/**
 * @description src/level5/client.jsのユニットテスト
 */

import assert     from 'assert';
import proxyquire from 'proxyquire';
import { getUsers } from '../../src/level5/client';

describe('Unit tests for src/level5/client.js', () => {
  it('通信が成功したとき', () => {
    const mockClient = proxyquire('../../src/level5/client', {
      axios: {
        get() {
          return new Promise(resolve => resolve('success'));
        },
      },
    });

    return mockClient.getUsers()
      .then(result => assert.equal('success', result));
  });
});
