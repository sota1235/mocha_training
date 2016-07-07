/**
 * @description イベントにフックして処理を行う
 */

import emitter from './event-emitter';

export const registEventListener = (eventName, listener) => {
  emitter.on(eventName, listener);
}
