/**
 * @description 四則計算を行うメソッド群
 */

export const add = (...args) => {
  let result = 0;

  for (let key in args) {
    let arg = args[key];
    if (!(typeof arg === 'number')) {
      throw new Error;
    }

    result += arg;
  }

  return result;
}
