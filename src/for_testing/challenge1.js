/**
 * @description 四則計算を行うメソッド群
 */

const isNumber = arg => typeof arg === 'number';

/**
 * @description 渡された引数の足し算の結果を返す
 */
export const add = (arg1, arg2) => {
  // 型チェック
  if (!(isNumber(arg1)) || !(isNumber(arg2))) {
    throw new Error;
  }

  return arg1 + arg2;
}

/**
 * @description 渡された引数の引き算の結果を返す
 */
export const minus = (arg1, arg2) => {
  // 型チェック
  if (!(isNumber(arg1)) || !(isNumber(arg2))) {
    throw new Error;
  }

  return arg1 - arg2;
}
