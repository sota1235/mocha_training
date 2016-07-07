/**
 * @description 文字列用Utilメソッド
 */

/**
 * @description HTMLエスケープを行う
 * @param {string} str
 * @return {string}
 */
export const escape = str => {
  return str.replace('&', '&amp;')
    .replace("'", '&#x27;')
    .replace('`', '&#x60;')
    .replace('"', '&quot;')
    .replace('<', '&lt;')
    .replace('>', '&gt;');
}

/**
 * @description HTTPもしくはHTTPSスキーマ付きの有効なURLかどうか判別
 * @param {string} url
 * @return {boolean}
 */
export const isValidUrl = url => {
  return url.match(/^https?:\/\//);
}

/**
 * @description クラスセレクターからクラス名を取り出す
 * @param {string} selector
 * @return {string}
 */
export const getClassName = selector => {
  return selector.replace(/^\./, '');
}
