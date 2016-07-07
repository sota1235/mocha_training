/**
 * @description src/level4/subscriber.jsのユニットテスト
 */

import assert from 'assert';
import sinon  from 'sinon';
import emitter from '../../src/level4/event-emitter';
import { registEventListener } from '../../src/level4/subscriber';

describe('Unit tests for src/level4/subscriber', () => {
  it('登録したイベントリスナがきちんと実行されることをテスト', () => {
    const spy       = sinon.spy();
    const eventName = 'EVENT_NAME';
    registEventListener(eventName, spy);
    emitter.emit(eventName);
    assert(spy.called);
  });
});
