/**
 * @description 四則計算を行うメソッド群
 */

/**
 * @description 渡された引数の足し算の結果を返す
 */
export const add = (arg1, arg2) => {
  // 型チェック
  if (!(typeof arg1 === 'number') || !(typeof arg2 === 'number')) {
    throw new Error;
  }

  return arg1 + arg2;
}
