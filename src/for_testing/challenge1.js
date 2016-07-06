/**
 * @description 四則計算を行うメソッド群
 */

/**
 * @description 型が数値型かどうかチェック
 * @param {mixed} arg
 * @return {boolean}
 */
const isNumber = arg => typeof arg === 'number';

/**
 * @description 計算前の型チェック処理
 * @param {mixed} arg1
 * @param {mixed} arg2
 * @return {void}
 * @throws {Error}
 */
const checkArgs = (arg1, arg2) => {
  if (!(isNumber(arg1)) || !(isNumber(arg2))) {
    throw new Error;
  }
};

/**
 * @description 渡された引数の足し算の結果を返す
 */
export const add = (arg1, arg2) => {
  checkArgs(arg1, arg2);
  return arg1 + arg2;
}

/**
 * @description 渡された引数の引き算の結果を返す
 */
export const minus = (arg1, arg2) => {
  checkArgs(arg1, arg2);
  return arg1 - arg2;
}

/**
 * @description 渡された引数の掛け算の結果を返す
 */
export const double = (arg1, arg2) => {
  checkArgs(arg1, arg2);
  return arg1 * arg2;
}

/**
 * @description 渡された引数の割り算の結果を返す
 */
export const devide = (arg1, arg2) => {
  checkArgs(arg1, arg2);
  return arg1 / arg2;
}
